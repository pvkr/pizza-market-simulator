package com.github.pvkr.pizza.registry.dto;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class PizzaDto {
    private Long id;
    private String name;
    private BigDecimal price;
    private String image;
    private String description;
}
