package com.github.pvkr.pizza.registry.service.impl;

import com.github.pvkr.pizza.registry.dto.PizzaDto;
import com.github.pvkr.pizza.registry.mapper.PizzaMapper;
import com.github.pvkr.pizza.registry.repository.PizzaRepository;
import com.github.pvkr.pizza.registry.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PizzaServiceImpl implements PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    @Autowired
    private PizzaMapper pizzaMapper;

    @Override
    @Transactional(readOnly = true)
    public List<PizzaDto> getAllPizzas() {
        return pizzaMapper.toPizzaDto(pizzaRepository.findAll());
    }
}
