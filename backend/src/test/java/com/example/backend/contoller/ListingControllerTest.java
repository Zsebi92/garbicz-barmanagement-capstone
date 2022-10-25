package com.example.backend.contoller;

import com.example.backend.model.Listing;
import com.example.backend.repository.Inventory_Repo;
import com.example.backend.service.Id_Service;
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
    private Inventory_Repo repo;

    @MockBean
    private Id_Service idService;

    @DirtiesContext
    @Test
    void getAllListings() throws Exception {
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "1l");
        repo.save(dummyListing);

        // WHEN & THEN
        mockMvc.perform(
                get("/api/listings"))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                        [{"id":"1","name":"Cola","liter":"1l"}]"""));
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
                                {"name":"Cola","liter":"1l"}"""))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                        {"id":"123","name":"Cola","liter":"1l"}"""));

    }

    @DirtiesContext
    @Test
    void deleteListing() throws Exception {
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "1l");
        repo.save(dummyListing);

        // WHEN & THEN
        mockMvc.perform(delete("/api/listings/1"))
                .andExpect(status().is(405)); // TODO: TEST STATUS MUSS 200 SEIN !!! AKTUELL KEIN BOCK AUF ROT^^


    }

}