import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;
  selectedProduct?: Product;
  

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
