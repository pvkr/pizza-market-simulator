package com.github.pvkr.pizza.registry.service;

import com.github.pvkr.pizza.registry.dto.PizzaDto;

import java.util.List;

public interface PizzaService {
    List<PizzaDto> getAllPizzas();
}
