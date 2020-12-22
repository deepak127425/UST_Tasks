package com.ust.vendor.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ust.vendor.entities.Vendor;
import com.ust.vendor.repo.VendorRepository;

@RestController
@RequestMapping("/vendors")
public class VendorRESTController {
	
	@Autowired
	VendorRepository vendorrepository;
	
	@GetMapping
	public List<Vendor> getVendors(){
		return vendorrepository.findAll();
	}
	
	@PostMapping
	public Vendor createVendor(@RequestBody Vendor vendor) {
		return vendorrepository.save(vendor);
	}
	
	@PutMapping
	public Vendor updateVendor(@RequestBody Vendor vendor) {
		return vendorrepository.save(vendor);
	}
	
	@DeleteMapping("/{id}")
	public void deleteVendor(@PathVariable("id") int id) {
		vendorrepository.deleteById(id);
	}
	
	@GetMapping("/{id}")
	public Optional<Vendor> getVendor(@PathVariable("id") int id) {
		return vendorrepository.findById(id);
	}

}
