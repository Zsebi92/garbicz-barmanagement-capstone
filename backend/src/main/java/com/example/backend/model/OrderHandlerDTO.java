package com.example.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderHandlerDTO {

    String barId;
    String barName;
    String listingId;
    String listingName;
    String listingSize;
    String quantity;
}
