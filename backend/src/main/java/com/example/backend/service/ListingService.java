package com.example.backend.service;

import com.example.backend.model.Listing;
import com.example.backend.repository.Inventory_Repo;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@org.springframework.stereotype.Service
public class ListingService {

    private final Inventory_Repo repo;
    private final Id_Service idService;

    @Autowired
    public ListingService(Inventory_Repo repo, Id_Service idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Listing> getAllListings(){
        return repo.findAll();
    }

    public Listing addListing(Listing listing) {
        listing.setId(idService.generateId());

        return repo.save(listing);
    }




}
