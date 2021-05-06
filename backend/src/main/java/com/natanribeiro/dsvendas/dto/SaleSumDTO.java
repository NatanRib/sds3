package com.natanribeiro.dsvendas.dto;

import java.io.Serializable;

import com.natanribeiro.dsvendas.entities.Seller;

public class SaleSumDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Double salesSum;
	
	public SaleSumDTO() {}

	public SaleSumDTO(String sellerName, Double salesSum) {
		this.sellerName = sellerName;
		this.salesSum = salesSum;
	}
	
	public SaleSumDTO(Seller seller, Double salesSum) {
		sellerName = seller.getName();
		this.salesSum = salesSum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSalesSum() {
		return salesSum;
	}

	public void setSalesSum(Double salesSum) {
		this.salesSum = salesSum;
	}
}
