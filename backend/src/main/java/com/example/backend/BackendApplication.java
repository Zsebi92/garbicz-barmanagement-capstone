package com.example.backend;

import com.example.backend.model.Listing;
import com.example.backend.repository.BarsRepo;
import com.example.backend.repository.InventoryRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class BackendApplication {


    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}
