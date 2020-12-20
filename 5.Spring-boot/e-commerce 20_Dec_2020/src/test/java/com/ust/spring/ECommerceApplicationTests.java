package com.ust.spring;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.ust.spring.imple.ProductRepository;
import com.ust.spring.model.Products;


@SpringBootTest
class ECommerceApplicationTests {

	@Autowired	
	private ProductRepository productrepository;
	
	@Test
	public void testCreateStudent() {
		Products product = new Products();
		product.setTitle("MiA1");
		product.setPrice(20000d);
		product.setCategory("Mobiles");
		product.setDescription("best phone");
		product.setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBR-fk3ntFfqCkfq0FNO_EZNxxV5ac0-qkTA&usqp=CAU");
		
		productrepository.save(product);
	}
	
	@Test
	public void testFindStudentById() {
		Products product = productrepository.findById(1l).get();
		System.out.println(product);
	}
	
	@Test
	public void testUpdateStudent() {
		Products product = productrepository.findById(1l).get();
		product.setPrice(15000d);
		productrepository.save(product);
		System.out.println(product);
	}
	
//	@Test
//	public void testDeleteStudent() {
//		Products product = productrepository.findById(2l).get();
//		productrepository.delete(product);
//	}
	

}
