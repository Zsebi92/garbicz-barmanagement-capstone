package com.example.backend.repository;

import com.example.backend.model.OrderHandler;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderHandlerRepo extends MongoRepository<OrderHandler, String> {
}
