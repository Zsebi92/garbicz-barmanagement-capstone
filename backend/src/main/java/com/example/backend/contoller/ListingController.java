package com.example.backend.contoller;

import com.example.backend.model.Listing;
import com.example.backend.model.ListingDTO;
import com.example.backend.service.ListingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/listings")
public class ListingController {

    private final ListingService service;

    @Autowired
    public ListingController(ListingService service){
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
    public Listing addListing(@RequestBody ListingDTO listingDTO){
        log.info("start to add listing with:  " + listingDTO);
        Listing result = service.addListing(listingDTO);
        log.info("add listing executed: " + result);

        return result;
    }

    @DeleteMapping("/{id}")
    public void deleteListing(@PathVariable String id){
        service.deleteListing(id);
    }


}
