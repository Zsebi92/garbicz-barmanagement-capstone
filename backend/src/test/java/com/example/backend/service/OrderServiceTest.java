package com.example.backend.service;

import com.example.backend.model.OrderHandler;
import com.example.backend.model.OrderHandlerDTO;
import com.example.backend.repository.OrderHandlerRepo;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class OrderServiceTest {

    private  final OrderHandlerRepo repo = mock(OrderHandlerRepo.class);

    private final IdService idService = mock(IdService.class);

    private final OrderService service= new OrderService(repo, idService);

    @Test
    void getAllOrders() {
        // GIVEN
        when(repo.findAll())
                .thenReturn(List.of(
                        new OrderHandler("1","Test", "Test","Test"),
                        new OrderHandler("2","Test2", "Test2","Test2")));

        // WHEN
        List<OrderHandler> actual = service.getAllOrders();

        // THEN
        List<OrderHandler> expected = List.of(
                new OrderHandler("1","Test", "Test","Test"),
                new OrderHandler("2","Test2", "Test2","Test2"));
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addOrder() {
        // GIVEN
        OrderHandler dummyOrder = OrderHandler.builder().barName("Test").listingName("Test").quantity("Test").build();
        when(repo.save(dummyOrder)).thenReturn(OrderHandler.builder().id("1").barName("Test").listingName("Test").quantity("Test").build());

        // WHEN
        OrderHandlerDTO newOrder = OrderHandlerDTO.builder().barName("Test").listingName("Test").quantity("Test").build();
        OrderHandler actual = service.addOrder(newOrder);

        // THEN
        OrderHandler expected = OrderHandler.builder().id("1").barName("Test").listingName("Test").quantity("Test").build();
        verify(repo).save(dummyOrder);
        assertEquals(expected, actual);

    }

    @Test
    void deleteOrder() {
        // Given
        OrderHandler dummyOrder = new OrderHandler("1","Test", "Test", "Test");
        when(repo.findById("1")).thenReturn(Optional.ofNullable(dummyOrder));

        // WHEN
        service.deleteOrder("1");

        // THEN
        verify(repo).deleteById("1");
    }
}