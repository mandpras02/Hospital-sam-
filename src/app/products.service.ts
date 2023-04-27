import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductAdmin } from './models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  baseUrl='http://localhost:16177/';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.baseUrl+'GetProducts');
  }

  addProduct(addProductRequest: ProductAdmin) {
    return this.http.post(this.baseUrl+'AddProduct',addProductRequest);
  }
  
}
