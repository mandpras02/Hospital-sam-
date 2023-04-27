import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { ReportsService } from '../services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  orderlist: any=[];
  hname:any='';

  constructor(private reportservice: ReportsService,private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.reportservice.getReports().subscribe(data=>      
      {
          console.log(data);
          this.orderlist=data;
      })
  }

  getHospitalName(id:any)
  {
    this.reportservice.getName(id).subscribe(data =>
      {
        console.log(data);
        this.hname=data;

      })
  }



}
