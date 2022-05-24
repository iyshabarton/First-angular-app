import { Component, OnInit } from '@angular/core';
import { NewProductRequest, Product } from './product';
import { PRODUCTS } from './mock-product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';
import { CreateModalComponent } from '../modal/create-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  //selectedProduct?: Product; selected product would be displayed with a click
  //products = PRODUCTS; this will get the data that has been stored in the mock-product file//
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  //onSelect(product: Product): void {
  // this.selectedProduct = product;
  // this.messageService.add(`ProductComponent: Selected product id=${product.id}`)
  //}

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  } //this will retrieve data from the service

  add(request: NewProductRequest): void {
    //varibale request has been created to hold the object NewProduct Request
    request.name = request.name.trim();
    request.description = request.description?.trim() ?? 'pas de description';
    request.description =
      request.description.length === 0
        ? 'pas de description'
        : request.description;
    if (!request.name || request.name.length === 0) {
      return;
    }
    this.productService.addProduct(request).subscribe((product) => {
      this.products.push(product);
    });
  } //the request(variable name) has been made to request the object NewProductRequest that has been created in the product.ts
  // which hold the object info types.
  // they both have trim() that will take out all the unwanted spaces, white spaces before and after the text
  // request.description.length === 0
  // ? 'pas de description'
  // : request.description; this is saying if the length of the text input in the description box is equal to 0 meaning that there is no input
  // then in the description info part will be displayed 'pas de description', other wise it will display what the user has written in.

  delete(product: Product): void {
    this.products = this.products.filter((p) => p !== product);
    this.productService.deleteProduct(product.id).subscribe();
  }
  newProduct() {
    const modalRef = this.modalService.open(CreateModalComponent);
    modalRef.result.then(
      (newProductRequest: NewProductRequest) => {
        console.log('OK');
        this.add(newProductRequest);
      },
      () => {
        console.log('Dismissed');
      }
    );
  }
}
