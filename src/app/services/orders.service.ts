import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersAdmin } from '../models/orders.model';
import { EditOrder } from '../models/updateorder.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl='http://localhost:53519/';

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(this.baseUrl+'GetOrderDetails');
  }

  addOrder(addOrderRequest: OrdersAdmin) {
    return this.http.post(this.baseUrl+'AddOrderDetail',addOrderRequest);
  }

  viewProduct(id: string){
    return this.http.get(this.baseUrl+'GetOrdById?id='+id);
  }

  editOrder(id: string, updaterequest: EditOrder): Observable<EditOrder> {
    return this.http.put<EditOrder>(this.baseUrl+'UpdateOrder', updaterequest);
  }

  deleteOrder(id: string){
    return this.http.delete(this.baseUrl+'DeleteOrder'+id);
  }
}
