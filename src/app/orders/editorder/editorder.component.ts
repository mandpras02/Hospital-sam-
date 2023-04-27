import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import {Router} from '@angular/router';
import { EditOrder } from 'src/app/models/updateorder.model';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})

export class EditorderComponent implements OnInit {

  userdata: any=[];

  constructor(private route: ActivatedRoute, private orderservice: OrdersService,private router:Router) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');


      if(id){
        this.orderservice.viewProduct(id)
        .subscribe(
          response => {
          this.userdata = response;
          console.log(response);
          }
        );
      }
      }
    );
  }

  onSave(): void {
    const updaterequest: EditOrder = {
      OrderId: this.userdata.OrderId,
    OrderDate: this.userdata.OrderDate,
    CreatedBy: this.userdata.CreatedBy,
    CreatedOn: this.userdata.CreatedOn,
    ApprovedRejectedBy: this.userdata.ApprovedRejectedBy,
    ApprovedRejectedOn: this.userdata.ApprovedRejectedOn,
    Quantity: this.userdata.Quantity,
    AllowedOrder: this.userdata.AllowedOrder,
    Status: this.userdata.Status,
    HospitalId: this.userdata.HospitalId,
    DepartmentId: this.userdata.DepartmentId,
    ProductId: this.userdata.ProductId,
    UserId: this.userdata.UserId
    } 

    this.orderservice.editOrder(this.userdata.id, this.userdata)
    .subscribe(
      response => {
        alert("Order Edited");
        this.router.navigate(['/orders']);
      }
    );
  }

  deletePost(): void {
    console.log(this.userdata.productId);
    this.orderservice.deleteOrder(this.userdata.orderId)
    .subscribe(
      response => {
        if(response)
        {         
        window.alert("Order Deleted Successfully");
        this.router.navigate(['/orders']);
        }
        else 
        {         
          window.alert("Deletion Failed");
        }
      }
    );
  }

}


