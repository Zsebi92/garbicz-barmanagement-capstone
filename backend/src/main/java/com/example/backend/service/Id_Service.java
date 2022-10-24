package com.example.backend.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class Id_Service {

    public String generateId(){
        return UUID.randomUUID().toString();
    }
}
