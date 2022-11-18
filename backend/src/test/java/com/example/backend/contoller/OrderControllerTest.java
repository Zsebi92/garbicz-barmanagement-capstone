package com.example.backend.contoller;

import com.example.backend.model.OrderHandler;
import com.example.backend.repository.OrderHandlerRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

class OrderControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private OrderHandlerRepo repo;

    @Autowired
    private IdService idService;

    @Test
    void getAllOrders() {
    }

    @Test
    void addOrder() {
    }

    @Test
    void deleteOrder() {

    }
}