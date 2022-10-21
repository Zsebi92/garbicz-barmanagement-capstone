package com.example.backend.contoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// TODO: DELETE LATER ON! ONLY FOR TESTING REASONS
@RestController
@RequestMapping("/api/hello")
public class HelloWorldController {

    @GetMapping
    public String sayHello(){
        return "Hello World!";
    }
}
