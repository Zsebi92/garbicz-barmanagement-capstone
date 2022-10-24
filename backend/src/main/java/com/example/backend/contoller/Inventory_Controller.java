package com.example.backend.contoller;

import com.example.backend.model.Inventory_Model;
import com.example.backend.service.Inventory_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
public class Inventory_Controller {

    private final Inventory_Service service;

    @Autowired
    public Inventory_Controller(Inventory_Service service) {
        this.service = service;
    }

    @GetMapping
    public List<Inventory_Model> getAllListings(){
        return service.getAllListings();
    }

    @GetMapping("{id}")
    public Inventory_Model getListingById(@PathVariable String id){
        return service.getListingById(id);
    }

    @PostMapping
    public Inventory_Model addListing(@RequestBody Inventory_Model inventoryModel){
        return service.addListing(inventoryModel);
    }

    @PutMapping("/{id}")
    public Inventory_Model editListing(@PathVariable String id, @RequestBody Inventory_Model inventoryModel){
        return service.editListing(id, inventoryModel);
    }

    @DeleteMapping("{id}")
    public void deleteListing(@PathVariable String id){
        service.deleteListing(id);
    }
}
