package com.example.backend.contoller;

import com.example.backend.model.Listing;
import com.example.backend.service.Listing_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/listings")
public class Listing_Controller {

    private final Listing_Service service;

    @Autowired
    public Listing_Controller(Listing_Service service){
        this.service = service;
    }

    @GetMapping
    public List<Listing> getAllListings(){
        return service.getAllListings();
    }

    @GetMapping("/{id}")
    public Listing getListingById(@PathVariable String id){
        return service.getListingById(id);
    }

    @PostMapping
    public Listing addListing(@RequestBody Listing listing){
        return service.addListing(listing);
    }

    @DeleteMapping("/{id}")
    public void deleteListing(@PathVariable String id){
        service.deleteListing(id);
    }

    @PutMapping("/{id}")
    public Listing editListing(@PathVariable String id, @RequestBody Listing listing) {
        return service.editListing(id, listing);
    }


}