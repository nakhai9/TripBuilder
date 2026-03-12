package org.javasbdemo.api.books;

import lombok.RequiredArgsConstructor;
import org.javasbdemo.lib.BaseApiResponse;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @PostMapping
    public BookResponseDto create(@RequestBody BookRequestDto request) {
        return bookService.create(request);
    }

    @GetMapping
    public List<BookResponseDto> getAll() {
        return bookService.getAll();
    }

    @GetMapping("/{id}")
    public BookResponseDto getById(@PathVariable UUID id) {
        return bookService.getById(id);
    }

    @PutMapping("/{id}")
    public BookResponseDto update(
            @PathVariable UUID id,
            @RequestBody BookRequestDto request) {

        return bookService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable UUID id) {
        bookService.delete(id);
    }
}