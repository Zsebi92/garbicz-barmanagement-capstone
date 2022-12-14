package com.example.backend.contoller;

import com.example.backend.model.Listing;
import com.example.backend.repository.InventoryRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;




import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ListingControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private InventoryRepo repo;

    @MockBean
    private IdService idService;

    @DirtiesContext
    @Test
    void getAllListings() throws Exception {
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "1l","1,50", "1,20", "24", "200", "100");
        repo.save(dummyListing);

        // WHEN & THEN
        mockMvc.perform(
                get("/api/listings"))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                        [{"id":"1","name":"Cola","liter":"1l","grossPurchase":"1,50","purchaseNet":"1,20","bottlesPerBox":"24","boxes":"200","pallets":"100"}]"""));
    }

    @DirtiesContext
    @Test
    void addListing() throws Exception {
        // GIVEN
        when(idService.generateId()).thenReturn("123");

        // WHEN & THEN
        mockMvc.perform(
                post("/api/listings")
                        .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .content("""
                                {"name":"Cola","liter":"1l","grossPurchase":"1,50","purchaseNet":"1,20","bottlesPerBox":"24","boxes":"200","pallets":"100"}"""))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                        {"id":"123","name":"Cola","liter":"1l","grossPurchase":"1,50","purchaseNet":"1,20","bottlesPerBox":"24","boxes":"200","pallets":"100"}"""));

    }

    @DirtiesContext
    @Test
    void deleteListing() throws Exception {
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "1l", "1,50", "1,20", "24", "200", "100");
        repo.save(dummyListing);

        // WHEN & THEN
        mockMvc.perform(delete("/api/listings/1"))
                .andExpect(status().is(200));


    }

}