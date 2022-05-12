import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { PRODUCTS } from './products/mock-product'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return PRODUCTS;
  }

  constructor() { }
}
