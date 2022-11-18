package com.example.backend.service;

import com.example.backend.model.Listing;
import com.example.backend.model.ListingDTO;
import com.example.backend.repository.InventoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class ListingService {

    private final InventoryRepo repo;
    private final IdService idService;

    @Autowired
    public ListingService(InventoryRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Listing> getAllListings(){
        return repo.findAll();
    }

    public Listing getListingById(String id){
        return repo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Not a single listing found with id: " +id));
    }

    public Listing addListing(ListingDTO listingDTO) {
        Listing listing = new Listing();
        listing.setId(idService.generateId());
        listing.setName(listingDTO.getName());
        listing.setLiter(listingDTO.getLiter());
        listing.setGrossPurchase(listingDTO.getGrossPurchase());
        listing.setPurchaseNet(listingDTO.getPurchaseNet());
        listing.setBottlesPerBox(listingDTO.getBottlesPerBox());
        listing.setBoxes(listingDTO.getBoxes());
        listing.setPallets(listingDTO.getPallets());

        return repo.save(listing);
    }

    public void deleteListing(String id){
        repo.deleteById(id);
    }





}
