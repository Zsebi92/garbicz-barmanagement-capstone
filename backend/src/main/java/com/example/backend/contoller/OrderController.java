package com.example.backend.contoller;

import com.example.backend.model.OrderHandler;
import com.example.backend.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService service;

    @Autowired
    public OrderController(OrderService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public OrderHandler getOrderById(@PathVariable String id) {
        return service.getOrderById(id);
    }

    @GetMapping
    public List<OrderHandler> getAllOrders(){
        return service.getAllOrders();
    }

    @PostMapping
    public OrderHandler addOrder(@RequestBody OrderHandler orderHandler){
        return service.addOrder(orderHandler);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable String id) {
        service.deleteOrder(id);
    }

    @PutMapping("/{id}")
    public OrderHandler editOrder(@PathVariable String id, @RequestBody OrderHandler orderHandler){
        return service.editOrder(id, orderHandler);
    }
}