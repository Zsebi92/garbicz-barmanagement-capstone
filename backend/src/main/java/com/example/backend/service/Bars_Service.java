package com.example.backend.service;

import com.example.backend.model.Bar;
import com.example.backend.repository.Bars_Repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class Bars_Service {

    private final Bars_Repo repo;
    private final Id_Service idService;

    @Autowired
    public Bars_Service(Bars_Repo repo, Id_Service idService) {
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

    public Bar addBar(Bar bar){
        bar.setId(idService.generateId());

        return repo.save(bar);
    }

    public void deleteBar(String id){
        repo.deleteById(id);
    }

    public Bar editBar(String id, Bar bar){
        repo.save(bar);
        return bar;
    }


}
