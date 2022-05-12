import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { PRODUCTS } from './products/mock-product'; 
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS); //still using the data from the mock-product file
    this.messageService.add('ProductService: fetched products')
    return products;
  }
}
