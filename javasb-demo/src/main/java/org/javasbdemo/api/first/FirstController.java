package org.javasbdemo.api.first;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/")
public class FirstController {
    @GetMapping
    public Map<String, String> first() {
        return Map.of("message", "hello");
    }
}
