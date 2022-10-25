package com.example.backend.service;

import com.example.backend.model.Listing;
import com.example.backend.repository.Inventory_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.NoSuchElementException;

@Service
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

    public Listing getListingById(String id){
        return repo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Not a single listing fount with id: " +id));
    }

    public Listing addListing(Listing listing) {
        listing.setId(idService.generateId());

        return repo.save(listing);
    }

    public void deleteListing(String id){
        repo.deleteById(id);
    }




}