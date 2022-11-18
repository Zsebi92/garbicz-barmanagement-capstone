package com.example.backend.service;
import com.example.backend.model.BarDTO;
import com.example.backend.model.OrderHandler;
import com.example.backend.model.OrderHandlerDTO;
import com.example.backend.repository.BarsRepo;
import com.example.backend.repository.OrderHandlerRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;


@Service
public class OrderService {

    private final OrderHandlerRepo repo;
    private final IdService idService;


    @Autowired
    public OrderService(OrderHandlerRepo repo,IdService idService) {
        this.repo = repo;
        this.idService = idService;

    }

    public OrderHandler getOrderById(String id){
        return repo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Not a single order find by id" +id));
    }

    public List<OrderHandler> getAllOrders(){
        return repo.findAll();
    }

    public OrderHandler addOrder(OrderHandlerDTO orderHandlerDTO) {
        OrderHandler orderHandler = new OrderHandler();
        orderHandler.setId(idService.generateId());

        orderHandler.setBarName(orderHandlerDTO.getBarName());
        orderHandler.setListingName(orderHandlerDTO.getListingName());
        orderHandler.setQuantity(orderHandlerDTO.getQuantity());

        return repo.save(orderHandler);
    }

    public void deleteOrder(String id){
        repo.deleteById(id);
    }


}
