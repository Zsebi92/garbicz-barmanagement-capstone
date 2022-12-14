package com.example.backend.service;

import com.example.backend.model.Bar;
import com.example.backend.model.BarDTO;
import com.example.backend.repository.BarsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class BarsService {

    private final BarsRepo repo;
    private final IdService idService;

    @Autowired
    public BarsService(BarsRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Bar> getAllBars(){
        return repo.findAll();
    }

    public Bar getBarById(String id){
        return repo.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Not a single Bar found with id: " +id));
    }

    public Bar addBar(BarDTO barDTO){
        Bar bar = new Bar();
        bar.setId(idService.generateId());
        bar.setName(barDTO.getName());
        bar.setLocation(barDTO.getLocation());
        bar.setDescription(barDTO.getDescription());

        return repo.save(bar);
    }

    public void deleteBar(String id){
        repo.deleteById(id);
    }



}
