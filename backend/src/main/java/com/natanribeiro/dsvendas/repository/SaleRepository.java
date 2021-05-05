package com.natanribeiro.dsvendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.natanribeiro.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{}