package com.example.backend.contoller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@SpringBootTest
@AutoConfigureMockMvc
class HelloWorldControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void sayHello_shouldReturnHello() throws Exception {
        // Given

        // WHEN & THEN
        mockMvc.perform(
                MockMvcRequestBuilders.get("/api/hello"))
                        .andExpect(status().is(200))
                .andExpect(content().string("Hello World!"));
    }

}