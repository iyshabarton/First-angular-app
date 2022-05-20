import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { PRODUCTS } from './products/mock-product';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productsUrl = 'api/products';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  // GET product by id, will 404 if id not found
  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap((_) => this.log(`fetched product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((_) => this.log('fetched heroes')), //Get products from the server
      catchError(this.handleError<Product[]>('getProductd', []))
    );
  }
  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      tap((_) => this.log(`updated product id=${product.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  //POST, add a new product th the server
  addProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.productsUrl, product, this.httpOptions)
      .pipe(
        tap((newProduct: Product) =>
          this.log(`added product w/id=${newProduct.id}`)
        ),
        catchError(this.handleError<Product>('addProduct'))
      );
  }
  // DELETE, the product rom the server
  deleteProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap((_) => this.log(`delete product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
