package com.example.backend.service;

import com.example.backend.model.Bar;
import com.example.backend.model.BarDTO;
import com.example.backend.repository.BarsRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class Bars_ServiceTest {

    private final BarsRepo repo = mock(BarsRepo.class);
    private final IdService idService = mock(IdService.class);
    private final BarsService service = new BarsService(repo, idService);

    @Test
    void getAllBars() {
        // GIVEN
        when(repo.findAll())
                .thenReturn(List.of(
                        new Bar("1","WeinBar","links neben der Hauptbühne","Nur Wein"),
                        new Bar("2","Bar 2","Campingplatz Eingang","Durchgehend besetzt")));

        // WHEN
        List<Bar> actual = service.getAllBars();

        // THEN
        List<Bar> expected = List.of(
                new Bar("1","WeinBar","links neben der Hauptbühne","Nur Wein"),
                new Bar("2","Bar 2","Campingplatz Eingang","Durchgehend besetzt"));
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addBar() {
        // GIVEN
        Bar dummyBar = Bar.builder().name("Test").location("Test").description("Test").build();
        when(repo.save(dummyBar)).thenReturn(Bar.builder().id("123").name("Test").location("Test").description("Test").build());

        // WHEN
        BarDTO newBar = BarDTO.builder().name("Test").location("Test").description("Test").build();
        Bar actual = service.addBar(newBar);

        // THEN
        Bar expected = Bar.builder().id("123").name("Test").location("Test").description("Test").build();
        verify(repo).save(dummyBar);
        assertEquals(expected, actual);
    }

    @Test
    void deleteBar() {
        // GIVEN
        Bar dummyBar = new Bar("1","WeinBar","links neben der Hauptbühne","Nur Wein");
        when(repo.findById("1")).thenReturn(Optional.ofNullable(dummyBar));

        // WHEN
        service.deleteBar("1");

        // THEN
        verify(repo).deleteById("1");
    }


}