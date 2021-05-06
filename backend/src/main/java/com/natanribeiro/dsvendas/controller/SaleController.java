package com.natanribeiro.dsvendas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natanribeiro.dsvendas.dto.SaleDTO;
import com.natanribeiro.dsvendas.dto.SaleSuccessDTO;
import com.natanribeiro.dsvendas.dto.SaleSumDTO;
import com.natanribeiro.dsvendas.service.SaleService;

@RestController
@RequestMapping(path = "/sales")
public class SaleController {

	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		return ResponseEntity.ok(service.findAll(pageable));
	}
	
	@GetMapping(path = "/sales-by-seller")
	public ResponseEntity<List<SaleSumDTO>> AmountSalesBySeller(){
		return ResponseEntity.ok(service.amountOfSalesBySeller());
	}
	
	@GetMapping(path = "/success-by-seller")
	public ResponseEntity<List<SaleSuccessDTO>> successSalesBySeller(){
		return ResponseEntity.ok(service.successOfSalesBySeller());
	}
}
