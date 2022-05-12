import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //products = PRODUCTS; this will get the data that has been stored in the mock-product file//
  products: Product[] = [];
  selectedProduct?: Product;
  
  constructor(private productService: ProductService) { }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  } //this will retrieve data from the service

  ngOnInit(): void {
    this.getProducts();
  }



}
