package com.example.backend.contoller;

import com.example.backend.model.Bar;
import com.example.backend.model.Listing;
import com.example.backend.repository.Bars_Repo;
import com.example.backend.service.Id_Service;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class Bars_ControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private Bars_Repo repo;

    @Autowired
    private Id_Service idService;

    @DirtiesContext
    @Test
    void getAllBars() throws Exception {
        // GIVEN
        Bar dummyBar = new Bar("1","WeinBar","links neben der Mainstage","Nur Wein");
        repo.save(dummyBar);

        // WHEN & THEN
        mockMvc.perform(
                get("/api/bars"))
                .andExpect(status().is(200))
                .andExpect(content().string("""
                        [{"id":"1","name":"WeinBar","location":"links neben der Mainstage","description":"Nur Wein"}]"""));

    }

    @DirtiesContext
    @Test
    void addBar() throws Exception {
        //TODO
    }

    @Test
    void deleteBar() throws Exception {
        // GIVEN
        Bar dummyBar = new Bar("1","WeinBar","links neben der Mainstage","Nur Wein");
        repo.save(dummyBar);

        // WHEN & THEN
        mockMvc.perform(delete("/api/bars/1"))
                .andExpect(status().is(200));
    }
}