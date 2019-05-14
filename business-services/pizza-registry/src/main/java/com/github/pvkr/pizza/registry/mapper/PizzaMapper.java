package com.github.pvkr.pizza.registry.mapper;

import com.github.pvkr.pizza.registry.domain.Pizza;
import com.github.pvkr.pizza.registry.dto.PizzaDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(uses = {IngredientMapper.class})
public interface PizzaMapper {

    List<PizzaDto> toPizzaDto(List<Pizza> pizzas);

    @Mapping(target = "description", source = "ingredients")
    PizzaDto toPizzaDto(Pizza pizza);
}
