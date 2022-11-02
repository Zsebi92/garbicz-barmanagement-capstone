package com.example.backend.repository;

import com.example.backend.model.Bar;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BarsRepo extends MongoRepository<Bar, String> {
}
