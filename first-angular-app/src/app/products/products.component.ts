import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  selectedProduct?: Product;
  //products = PRODUCTS; this will get the data that has been stored in the mock-product file//
  products: Product[] = [];
  
  constructor(
    private productService: ProductService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`ProductComponent: Selected product id=${product.id}`)
  }

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  } //this will retrieve data from the service



}
