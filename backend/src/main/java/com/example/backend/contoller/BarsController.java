package com.example.backend.contoller;

import com.example.backend.model.Bar;
import com.example.backend.model.BarDTO;
import com.example.backend.service.BarsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bars")
public class BarsController {

    private final BarsService service;

    public BarsController(BarsService service) {
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
    public Bar addBar(@RequestBody BarDTO barDTO){
        return service.addBar(barDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteBar(@PathVariable String id){
        service.deleteBar(id);
    }







}
