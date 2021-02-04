package com.ust.dsproducts.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.dsproducts.exception.ResourceNotFoundException;
import com.ust.dsproducts.model.Products;
import com.ust.dsproducts.util.ProductRepo;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/Products")
public class ProductsController {

	@Autowired
	ProductRepo productrepository;

	@GetMapping(produces = "application/json")
	public List<Products> getProducts() {
		return productrepository.findAll();
	}

	@PostMapping
	public Products createProduct(@RequestBody Products product) {
		return productrepository.save(product);
	}
	
	@PutMapping(path = "/updateProduct", produces = "application/json")
	public Products updateLocation(@RequestBody Products product) {
		return productrepository.save(product);
	}
	
	@DeleteMapping("/{id}")
	public String deleteLocation(@PathVariable("id") int id) {
//		return productrepository.deleteById(id);
		Products existingUser = this.productrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + id));
		this.productrepository.delete(existingUser);
//		return ResponseEntity.ok().build();
		return "deleted successfully";
	}
	
	@GetMapping("/{id}")
	public Products getLocation(@PathVariable("id") int id) {
		return productrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + id));
	}

}
