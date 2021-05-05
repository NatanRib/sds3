package com.natanribeiro.dsvendas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.natanribeiro.dsvendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
