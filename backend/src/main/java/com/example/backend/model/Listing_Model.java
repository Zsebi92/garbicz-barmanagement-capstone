package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Listing_Model {

    /*  ekb = Einkaufsbrutto
        ekn = Eikaufsnetto
        fpk = Flaschen pro Kiste
     */
    String id;
    String name;
    Integer liter;
    Integer ekb;
    Integer ekn;
    Integer fpk;
    Integer kisten;
    Integer paletten;
}
