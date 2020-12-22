package com.ust.vendor.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ust.vendor.entities.Vendor;

public interface VendorRepository extends JpaRepository<Vendor, Integer> {
	@Query("select type,count(type) from Vendor group by type")
	public List<Object[]> findTypeAndTypeCount();
}
