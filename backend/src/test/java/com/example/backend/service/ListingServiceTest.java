package com.example.backend.service;

import com.example.backend.model.Listing;
import com.example.backend.repository.Inventory_Repo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ListingServiceTest {

    private final Inventory_Repo repo = mock(Inventory_Repo.class);
    private final Id_Service idService = mock(Id_Service.class);
    private final ListingService service = new ListingService(repo, idService);

    @Test
    void getAllListings(){
        // GIVEN
        when(repo.findAll())
                .thenReturn(List.of(
                        new Listing("1", "Cola", "1l"),
                        new Listing("2", "Fanta", "1,5l")));

        // WHEN
        List<Listing> actual = service.getAllListings();

        // THEN
        List<Listing> expected = List.of(
                new Listing("1", "Cola", "1l"),
                new Listing("2", "Fanta", "1,5l"));
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addListing() {
        // GIVEN
        Listing dummyListing = new Listing("1", "Cola", "0,33l");
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
        Listing dummyListing = new Listing("1", "Cola", "0,5l");
        when(repo.findById("1")).thenReturn(Optional.ofNullable(dummyListing));

        // WHEN
        service.deleteListing("1");

        // THEN
        verify(repo).deleteById("1");
    }

}