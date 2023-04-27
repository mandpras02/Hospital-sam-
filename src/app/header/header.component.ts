import { Component } from '@angular/core';
import{MatDialog} from '@angular/material/dialog'
import { HospitalComponent } from '../hospital/hospital.component';
import { HospitalAddComponent } from '../hospital-add/hospital-add.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // constructor(private _dialog:MatDialog){}
  // openHospitalForm(){
  //   this._dialog.open(HospitalComponent);
  // }
  constructor(private _dialog:MatDialog){}
  HospitalAddForm(){
    this._dialog.open(HospitalAddComponent);
  }
}
