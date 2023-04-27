import { Component,OnInit } from '@angular/core';
import { ProductAdmin } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit{
  addProductRequest: ProductAdmin={
    ProductId: '',
    ProductName: '',
    QuantityLimit: '',
    NumberOfPcs: '',
    FulfilledBy: '',
    Status: ''
  }

  userdata: any=[];

  constructor(private productservice: ProductsService,private router: Router) { }

  ngOnInit(): void{
    
  }

  addProduct() {
    this.productservice.addProduct(this.addProductRequest)
    .subscribe(data => 
      {
        console.log(data);
        this.userdata=data;
      window.alert("Product Added");
      this.router.navigate(['/products']);
      });
  }
}
