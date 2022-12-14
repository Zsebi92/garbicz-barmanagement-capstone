package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Document("inventory")
public class Listing {


    @Id
    String id;
    String name;
    String liter;
    String grossPurchase;
    String purchaseNet;
    String bottlesPerBox;
    String boxes;
    String pallets;
}
