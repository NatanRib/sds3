package com.natanribeiro.dsvendas.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.natanribeiro.dsvendas.dto.SaleSuccessDTO;
import com.natanribeiro.dsvendas.dto.SaleSumDTO;
import com.natanribeiro.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
	@Query(value = "SELECT new com.natanribeiro.dsvendas.dto.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "FROM  Sale AS obj GROUP BY obj.seller")
	List<SaleSumDTO> amountOfSalesBySeller();
	
	@Query(value = "SELECT new com.natanribeiro.dsvendas.dto.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals)) "
			+ "FROM Sale AS obj GROUP BY obj.seller")
	List<SaleSuccessDTO> successOfSalesBySeller();
}