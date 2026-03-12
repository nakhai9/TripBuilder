package org.javasbdemo.api.books;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookResponseDto {

    private UUID id;

    private String name;

    private String author;
}

