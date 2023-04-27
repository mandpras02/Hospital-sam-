import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orderlist: any=[];

  constructor(private orderservice: OrdersService,private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.orderservice.getOrders().subscribe(data=>      
      {
          console.log(data);
          this.orderlist=data;
      })
  }

  OnClick() {
    this.router.navigate(['/addOrder']);
  }
}
