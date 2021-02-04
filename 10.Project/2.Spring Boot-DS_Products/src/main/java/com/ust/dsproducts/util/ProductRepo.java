package com.ust.dsproducts.util;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ust.dsproducts.model.Products;

public interface ProductRepo extends MongoRepository<Products, Integer> {

}
