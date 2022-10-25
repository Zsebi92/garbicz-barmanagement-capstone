package com.example.backend.repository;

import com.example.backend.model.Listing;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Inventory_Repo extends MongoRepository<Listing, String> {
}
