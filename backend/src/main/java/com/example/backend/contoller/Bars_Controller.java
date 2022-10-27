package com.example.backend.contoller;

import com.example.backend.model.Bar;
import com.example.backend.service.Bars_Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bars")
public class Bars_Controller {

    private final Bars_Service service;

    public Bars_Controller(Bars_Service service) {
        this.service = service;
    }

    @GetMapping
    public List<Bar> getAllBars(){
        return service.getAllBars();
    }

    @GetMapping("/{id}")
    public Bar getBarById(@PathVariable String id){
        return service.getBarById(id);
    }

    @PostMapping
    public Bar addBar(@RequestBody Bar bar){
        return service.addBar(bar);
    }

    @DeleteMapping("/{id}")
    public void deleteBar(@PathVariable String id){
        service.deleteBar(id);
    }

    @PutMapping("/{id}")
    public Bar editBar(@PathVariable String id, @RequestBody Bar bar){
        return service.editBar(id, bar);
    }





}
