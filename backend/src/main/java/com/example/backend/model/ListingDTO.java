package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ListingDTO {

    String name;
    String liter;
    String grossPurchase;
    String purchaseNet;
    String bottlesPerBox;
    String boxes;
    String pallets;
}
