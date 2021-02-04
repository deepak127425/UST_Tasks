package com.ust.dsproducts.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Products {

	@Id
	private Integer productid;
	private String productname;
	private String productcategory;
	private Long productprice;
	private String available;
	private Integer rating;

	public Integer getProductid() {
		return productid;
	}

	public void setProductid(Integer productid) {
		this.productid = productid;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getProductcategory() {
		return productcategory;
	}

	public void setProductcategory(String productcategory) {
		this.productcategory = productcategory;
	}

	public Long getProductprice() {
		return productprice;
	}

	public void setProductprice(Long productprice) {
		this.productprice = productprice;
	}

	public String getAvailable() {
		return available;
	}

	public void setAvailable(String available) {
		this.available = available;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	@Override
	public String toString() {
		return "Products [productid=" + productid + ", productname=" + productname + ", productcategory="
				+ productcategory + ", productprice=" + productprice + ", available=" + available + ", rating=" + rating
				+ "]";
	}

}
