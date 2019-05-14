package com.github.pvkr.pizza.registry.repository;

import com.github.pvkr.pizza.registry.domain.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
public interface PizzaRepository extends JpaRepository<Pizza, Long> {
}
