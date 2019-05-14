package com.github.pvkr.pizza.registry.mapper;

import com.github.pvkr.pizza.registry.domain.Ingredient;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.stream.Collectors;

@Mapper
public interface IngredientMapper {
    default String toPizzaDescription(List<Ingredient> ingredients) {
        return ingredients.stream().map(Ingredient::getName).collect(Collectors.joining(", "));
    }
}
