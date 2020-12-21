package com.ust.spring.imple;

import org.springframework.data.repository.CrudRepository;

import com.ust.spring.model.Products;

public interface ProductRepository extends CrudRepository<Products, Long> {

}
