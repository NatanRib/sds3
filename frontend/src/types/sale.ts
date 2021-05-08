import { Seller } from "./seller"

export type SalesSum = {
    sellerName: string;
    salesSum: number;
}

export type SalesSuccess = {
    sellerName: string;
    visitedSum: number;
    dealsSum: number;
}

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seller: Seller
}

export type salePage = {
    content: Sale[];
    last: boolean;
    totalPages?: number;
    totalElements?: number;
    size?: number;
    number?: number;
    first: boolean
    numberOfElements?: number;
    empty: boolean;
}