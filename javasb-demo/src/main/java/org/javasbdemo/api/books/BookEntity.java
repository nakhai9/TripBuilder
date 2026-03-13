package org.javasbdemo.api.books;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;
import org.javasbdemo.lib.BaseEntity;

import java.util.UUID;

@Entity
@Table(name = "books")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BookEntity extends BaseEntity {

    private String name;

    private String author;
}
