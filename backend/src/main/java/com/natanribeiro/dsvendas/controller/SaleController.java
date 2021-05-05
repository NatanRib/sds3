package com.natanribeiro.dsvendas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natanribeiro.dsvendas.dto.SaleDTO;
import com.natanribeiro.dsvendas.service.SaleService;

@RestController
@RequestMapping(path = "/sales")
public class SaleController {

	@Autowired
	private SaleService service;
	
	@GetMapping
	public Page<SaleDTO> findAll(Pageable pageable) {
		return service.findAll(pageable);
	}
}
