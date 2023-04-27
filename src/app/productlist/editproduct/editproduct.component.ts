import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductAdmin } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { EditProduct } from 'src/app/models/updateProduct.model';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{
  editProductRequest: ProductAdmin={
    ProductId: '',
    ProductName: '',
    QuantityLimit: '',
    NumberOfPcs: '',
    FulfilledBy: '',
    Status: ''
  }

  userdata: any=[];

  constructor(private route: ActivatedRoute, private prodservice: ProductsService,private router:Router) { }

  ngOnInit(): void{

    this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');


      if(id){
        this.prodservice.viewProduct(id)
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
    const updaterequest: EditProduct = {
      ProductName: this.userdata.ProductId,
      QuantityLimit: this.userdata.QuantityLimit,
      NumberOfPcs: this.userdata.NumberOfPcs,
      FulfilledBy: this.userdata.FulfilledBy,
      Status: this.userdata.Status
    } 

    this.prodservice.editProduct(this.userdata.id, this.userdata)
    .subscribe(
      response => {
        alert("Product Edited");
        this.router.navigate(['/products']);
      }
    );
  }

  deletePost(): void {
    console.log(this.userdata.productId);
    this.prodservice.deleteProduct(this.userdata.productId)
    .subscribe(
      response => {
        if(response)
        {         
        window.alert("Product Deleted Successfully");
        this.router.navigate(['/products']);
        }
        else 
        {         
          window.alert("Deletion Failed");
        }
      }
    );
  }

  // getSingleProduct() {
  //   this.prodservice.getProduct(this.userdata)
  //   .subscribe(data => 
  //     {
  //       console.log(data);
  //       this.userdata=data;  
  //       this.router.navigate(['/products']);    
  //     });
  // }

}

// .subscribe(data => 
//   {
//     console.log(data);
//     this.userdata=data;
//   window.alert("Product Added");
//   this.router.navigate(['/products']);
//   });
