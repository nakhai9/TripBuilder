package org.javasbdemo.api.books;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public BookResponseDto create(BookRequestDto request) {

        BookEntity book = BookEntity.builder()
                .name(request.getName())
                .author(request.getAuthor())
                .build();

        BookEntity savedBook = bookRepository.save(book);

        return mapToResponse(savedBook);
    }

    public List<BookResponseDto> getAll() {
        return bookRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public BookResponseDto getById(UUID id) {

        BookEntity book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        return mapToResponse(book);
    }

    public BookResponseDto update(UUID id, BookRequestDto request) {

        BookEntity book = bookRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        book.setName(request.getName());
        book.setAuthor(request.getAuthor());

        BookEntity updatedBook = bookRepository.save(book);

        return mapToResponse(updatedBook);
    }

    public void delete(UUID id) {
        bookRepository.deleteById(id);
    }

    private BookResponseDto mapToResponse(BookEntity book) {
        return BookResponseDto.builder()
                .id(book.getId())
                .name(book.getName())
                .author(book.getAuthor())
                .build();
    }
}
