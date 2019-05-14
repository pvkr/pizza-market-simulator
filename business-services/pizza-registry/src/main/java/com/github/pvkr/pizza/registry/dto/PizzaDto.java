package com.github.pvkr.pizza.registry.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class PizzaDto {
    private String pizzaName;
    private BigDecimal basePrice;
    private String image;
    private String description;
}
