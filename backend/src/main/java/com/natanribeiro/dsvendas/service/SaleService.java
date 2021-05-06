package com.natanribeiro.dsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.natanribeiro.dsvendas.dto.SaleDTO;
import com.natanribeiro.dsvendas.dto.SaleSuccessDTO;
import com.natanribeiro.dsvendas.dto.SaleSumDTO;
import com.natanribeiro.dsvendas.entities.Sale;
import com.natanribeiro.dsvendas.repository.SaleRepository;
import com.natanribeiro.dsvendas.repository.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerRepository.findAll();
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountOfSalesBySeller(){
		return repository.amountOfSalesBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successOfSalesBySeller(){
		return repository.successOfSalesBySeller();
	}
}
