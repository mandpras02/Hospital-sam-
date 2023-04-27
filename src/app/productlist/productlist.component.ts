import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productlist: any=[];

  constructor(private productservice: ProductsService,private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productservice.getProducts().subscribe(data=>      
      {
          console.log(data);
          this.productlist=data;
      })
  }

  OnClick() {
    this.router.navigate(['/addproduct']);
  }
}
