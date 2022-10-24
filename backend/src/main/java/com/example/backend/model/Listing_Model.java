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
public class Listing_Model {

    /*  ekb = Einkaufsbrutto
        ekn = Eikaufsnetto
        fpk = Flaschen pro Kiste
     */
    @Id
    String id;
    String name;
    String liter;
    String ekb;
    String ekn;
    String fpk;
    String kisten;
    String paletten;
}
