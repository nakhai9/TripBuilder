package org.javasbdemo.api.books;

import org.javasbdemo.lib.BaseApiResponse;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/books")
public class BookController {
    @GetMapping
    public String getList() {
        return "Hello Books";
    }

    @GetMapping("/{id}")
    public String getById(@PathVariable UUID id) {
        return "Hello Book " + id;
    }

    @PostMapping
    public String create(@RequestBody String payload) {
        return "Hello Book";
    }


}
