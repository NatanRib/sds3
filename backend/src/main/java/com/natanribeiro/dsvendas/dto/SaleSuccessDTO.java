package com.natanribeiro.dsvendas.dto;

import com.natanribeiro.dsvendas.entities.Seller;

public class SaleSuccessDTO {

	private String sellerName;
	private Long visitedSum;
	private Long dealsSum;
	
	public SaleSuccessDTO() {}

	public SaleSuccessDTO(String sellerName, Long visitedSum, Long dealsSum) {
		this.sellerName = sellerName;
		this.visitedSum = visitedSum;
		this.dealsSum = dealsSum;
	}
	
	public SaleSuccessDTO(Seller seller, Long visitedSum, Long dealsSum) {
		sellerName = seller.getName();
		this.visitedSum = visitedSum;
		this.dealsSum = dealsSum;
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getVisitedSum() {
		return visitedSum;
	}

	public void setVisitedSum(Long visitedSum) {
		this.visitedSum = visitedSum;
	}

	public Long getDealsSum() {
		return dealsSum;
	}

	public void setDealsSum(Long dealsSum) {
		this.dealsSum = dealsSum;
	}
}
