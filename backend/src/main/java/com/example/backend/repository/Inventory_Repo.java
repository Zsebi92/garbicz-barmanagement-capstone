package com.example.backend.repository;

import com.example.backend.model.Inventory_Model;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Inventory_Repo extends MongoRepository<Inventory_Model, String> {
}
