package org.javasbdemo.api.books;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookRequestDto {

    private String name;

    private String author;
}
