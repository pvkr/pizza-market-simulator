package com.github.pvkr.pizza.registry.controller;

import com.github.pvkr.pizza.registry.dto.PizzaDto;
import com.github.pvkr.pizza.registry.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("pizzas")
public class PizzaController {

    @Autowired
    private PizzaService pizzaService;

    @GetMapping
    public List<PizzaDto> getAllPizzas() {
        return pizzaService.getAllPizzas();
    }
}
