import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersAdmin } from 'src/app/models/orders.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {

  addOrderRequest: OrdersAdmin = {
    OrderId: '',
    OrderDate: '',
    CreatedBy: '',
    CreatedOn: '',
    ApprovedRejectedBy: '',
    ApprovedRejectedOn: '',
    Quantity: '',
    AllowedOrder: '',
    Status: '',
    HospitalId: '',
    DepartmentId: '',
    ProductId: '',
    UserId: ''
  }

  userdata: any=[];

  constructor(private orderservice: OrdersService,private router: Router) { }


  ngOnInit(): void {

  }

  addOrder() {
    console.log(this.addOrderRequest);
    this.orderservice.addOrder(this.addOrderRequest)
    .subscribe(data => 
      {
        console.log(data);
        this.userdata=data;
      window.alert("Order Added");
      this.router.navigate(['/orders']);
      });
  }


}
