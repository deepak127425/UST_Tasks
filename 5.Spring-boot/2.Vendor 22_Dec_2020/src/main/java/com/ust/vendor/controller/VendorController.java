package com.ust.vendor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;


import com.ust.vendor.entities.Vendor;
import com.ust.vendor.repo.VendorRepository;
import com.ust.vendor.service.VendorService;
import com.ust.vendor.util1.EmailUtil;
import com.ust.vendor.util1.ReportUtil;

@Controller
public class VendorController {
	
	@Autowired
	VendorService service;
	
	@Autowired
	EmailUtil emailUtil;
	
	@Autowired
	VendorRepository repository;

	@Autowired
	ReportUtil reportutil;
	
	@Autowired
	ServletContext sc;
	
	@RequestMapping("/showCreate")
	public String showCreate() {
		return "createVendor";
	}
	
	@RequestMapping("/saveVen")
	public String saveVendor(@ModelAttribute("vendor") Vendor vendor, ModelMap modelMap) {
		Vendor vendorSaved = service.saveVendor(vendor);
		String msg = "vendor successfullly saved with Id: " + vendorSaved.getId();
		modelMap.addAttribute("msg", msg);
		
		emailUtil.sendEmail("deepaksrinivasan06@gmail.com", "Vendor Saved", "Vendor Saved Successfully");

		return "createVendor"; 
	}
	
	@RequestMapping("/displayVendors")
	public String displayVendors(ModelMap modelMap) {
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors", vendors);
		return "displayVendor";
	}
	
	@RequestMapping("/deleteVendor")
	public String deleteVendor(@RequestParam("id") int id, ModelMap modelMap ) {
		//Location location = service.getLocationById(id);
		Vendor vendor = new Vendor();
		vendor.setId(id);
		service.deleteVendor(vendor);
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors", vendors);
		return "displayVendor";
	}
	
	@RequestMapping("/showUpdate")
	public String showUpdate(@RequestParam("id") int id, ModelMap modelMap ) {
		Vendor vendor = service.getVendorById(id);
		modelMap.addAttribute("vendor", vendor);
		return "updateVendor";
	}
	
	@RequestMapping("/updateVen")
	public String updateVendor(@ModelAttribute("vendor") Vendor vendor, ModelMap modelMap ) {
		service.updateVendor(vendor);
		
		List<Vendor> vendors = service.getAllVendors();
		modelMap.addAttribute("vendors", vendors);
		
		return "displayVendor";
	}
	
	@RequestMapping("/generateReport")
	public String generateReport() {
		String path = sc.getRealPath("/");
		List<Object[]> data = repository.findTypeAndTypeCount();
		reportutil.generatePieChart(path, data);
		return "report";
	}
}
