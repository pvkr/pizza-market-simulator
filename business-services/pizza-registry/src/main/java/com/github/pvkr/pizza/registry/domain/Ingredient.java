package com.github.pvkr.pizza.registry.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@Table(name = "ingredient")
@Entity
public class Ingredient {
    @Id
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;
}
