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
  
  //selectedProduct?: Product; selected product would be displayed with a click
  //products = PRODUCTS; this will get the data that has been stored in the mock-product file//
  products: Product[] = [];
  
  constructor(
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  //onSelect(product: Product): void {
   // this.selectedProduct = product;
   // this.messageService.add(`ProductComponent: Selected product id=${product.id}`)
  //}

  getProducts(): void {
    this.productService.getProducts()
    .subscribe(products => this.products = products);
  } //this will retrieve data from the service

    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.productService.addProduct({ name } as Product )
      .subscribe(product => {
        this.products.push(product)
      })
    }
    delete(product: Product): void {
      this.products = this.products.filter(p => p !== product);
      this.productService.deleteProduct(product.id).subscribe();
    }


}
