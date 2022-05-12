import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './products/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
        { id: 1, name: 'test1', description:  'test1', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUFZ6pBRjIkSu3R9AxEsxWad5HP6YsBB9Dsw&usqp=CAU', price: 10 },
        { id: 2, name: 'test2', description: 'test2', imageUrl:'test2', price: 20 },
        { id: 3, name: 'test3', description: 'test3', imageUrl: 'test3', price: 30 },
        { id: 4, name: 'test4', description: 'test4', imageUrl: 'test4', price: 40 },
        { id: 5, name: 'test5', description: 'test5', imageUrl: 'test5', price: 50 },
        { id: 6, name: 'test6', description: 'test6', imageUrl: 'test6', price: 60 }
    ];
    return {products}
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(products => products.id)) + 1 : 11;
  }


  constructor() { }
}
