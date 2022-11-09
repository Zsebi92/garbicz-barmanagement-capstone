package com.example.backend.service;

import com.example.backend.model.Bar;
import com.example.backend.model.Listing;
import com.example.backend.model.OrderHandler;
import com.example.backend.repository.BarsRepo;
import com.example.backend.repository.InventoryRepo;
import com.example.backend.repository.OrderHandlerRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


@Service
public class OrderService {

    private final OrderHandlerRepo repo;
    private final InventoryRepo inventoryRepo;
    private final BarsRepo barsRepo;
    private final IdService idService;

    @Autowired
    public OrderService(OrderHandlerRepo repo, InventoryRepo inventoryRepo, BarsRepo barsRepo ,IdService idService) {
        this.repo = repo;
        this.idService = idService;
        this.inventoryRepo = inventoryRepo;
        this.barsRepo = barsRepo;
    }

    public OrderHandler getOrderById(String id){
        return repo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Not a single order find by id" +id));
    }
    public List<OrderHandler> getAllOrders(){
        return repo.findAll();
    }

    public OrderHandler addOrder(OrderHandler orderHandler, Bar bar, Listing listing) {
        orderHandler.setId(idService.generateId());
        orderHandler.setBarId(bar.getId());
        orderHandler.setListingNameId(listing.getId());

        return repo.save(orderHandler);
    }

    public void deleteOrder(String id){
        repo.deleteById(id);
    }

    public OrderHandler editOrder(String id, OrderHandler orderHandler){
        repo.save(orderHandler);
        return orderHandler;
    }
}
