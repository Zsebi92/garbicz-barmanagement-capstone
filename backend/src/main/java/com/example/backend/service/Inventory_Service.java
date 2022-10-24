package com.example.backend.service;

import com.example.backend.model.Listing_Model;
import com.example.backend.repository.Inventory_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class Inventory_Service {

    private final Inventory_Repo repo;
    private final Id_Service idService;

    @Autowired
    public Inventory_Service(Inventory_Repo repo, Id_Service idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Listing_Model> getAllListings(){
        return repo.findAll();
    }

    public Listing_Model getListingById(String id){
        return repo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Not a single listing found with id" +id));
    }

    public Listing_Model addListing(Listing_Model newListing){

        newListing.setId(idService.generateId());

        return repo.save(newListing);

    }

    public Listing_Model editListing(String id, Listing_Model inventoryModel) {
        repo.save(inventoryModel);
        return inventoryModel;
    }

    public void deleteListing(String id){
        repo.deleteById(id);
    }
}
