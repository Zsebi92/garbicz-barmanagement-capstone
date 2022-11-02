package com.example.backend.service;

import com.example.backend.model.Listing;
import com.example.backend.repository.InventoryRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ListingServiceTest {

    private final InventoryRepo repo = mock(InventoryRepo.class);
    private final IdService idService = mock(IdService.class);
    private final ListingService service = new ListingService(repo, idService);

    @Test
    void getAllListings(){
        // GIVEN
        when(repo.findAll())
                .thenReturn(List.of(
                        new Listing("1", "Cola", "1l", "1,50", "1,20", "24", "200", "100"),
                        new Listing("2", "Fanta", "1,5l", "2,00", "1,80", "24", "150", "75")));

        // WHEN
        List<Listing> actual = service.getAllListings();

        // THEN
        List<Listing> expected = List.of(
                new Listing("1", "Cola", "1l", "1,50", "1,20", "24", "200", "100"),
                new Listing("2", "Fanta", "1,5l", "2,00", "1,80", "24", "150", "75"));
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addListing() {
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "0,33l","1,50", "1,20", "24", "200", "100");
        when(repo.save(dummyListing)).thenReturn(dummyListing);

        // WHEN
        Listing actual = service.addListing(dummyListing);

        // THEN
        verify(repo).save(dummyListing);
        assertEquals(dummyListing, actual);
    }

    @Test
    void deleteListing(){
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "0,5l", "1,50", "1,20", "24", "200", "100");
        when(repo.findById("1")).thenReturn(Optional.ofNullable(dummyListing));

        // WHEN
        service.deleteListing("1");

        // THEN
        verify(repo).deleteById("1");
    }

    @Test
    void editListing() {
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "0,5l", "1,50", "1,20", "24", "200", "100");

        when(service.editListing("1", dummyListing)).thenReturn(dummyListing);
        when(repo.existsById("1")).thenReturn(true);

        // WHEN
        Listing actual = service.editListing("1", dummyListing);

        // THEN
        assertEquals(dummyListing, actual);


    }

}