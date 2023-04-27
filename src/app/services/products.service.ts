import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductAdmin } from '../models/product.model';
import { EditProduct } from '../models/updateProduct.model';

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
  viewProduct(id: string){
    return this.http.get(this.baseUrl+'GetProductById?id='+id);
  }
  
  editProduct(id: string, updaterequest: EditProduct): Observable<EditProduct> {
    return this.http.put<EditProduct>(this.baseUrl+'UpdateProduct', updaterequest);
  }

  deleteProduct(id: string){
    return this.http.delete(this.baseUrl+'DeleteProduct/'+id);
  }


  
}
