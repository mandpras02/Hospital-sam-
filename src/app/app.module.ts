import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{AgGridModule} from 'ag-grid-angular';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DepartmentComponent } from './department/department.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import{MatButtonModule} from'@angular/material/button'
import { MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './productlist/addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { EditproductComponent } from './productlist/editproduct/editproduct.component';
import { AddorderComponent } from './orders/addorder/addorder.component';
import { EditorderComponent } from './orders/editorder/editorder.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import{MatCardModule} from '@angular/material/card';
import{MatRadioModule} from '@angular/material/radio';
import{MatTableModule} from '@angular/material/table';
import{MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import{MatCheckboxModule} from '@angular/material/checkbox';
// import{ToastrModule} from 'ngx-toastr';
import { AdminComponent } from './admin/admin.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProfileComponent } from './profile/profile.component';
import { UserviewComponent } from './userview/userview.component';
import { UserscreenComponent } from './userscreen/userscreen.component';
@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    HospitalComponent,
    DepartmentComponent,
    HeaderComponent,
    HospitalAddComponent,
    HomeComponent,
    UsersComponent,
    ReportsComponent,
    LoginComponent,
    RegisterComponent,
    ProductlistComponent,
    AddproductComponent,
    EditproductComponent,
    AddorderComponent,
    EditorderComponent,
  EdituserComponent,
    AdminComponent,
    ProfileComponent,  
    UserviewComponent,
    UserscreenComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatRadioModule,
     MatTableModule,
  MatSortModule,
  MatCheckboxModule,
   MatCardModule, 
   Ng2SearchPipeModule,
  //  ToastrModule.forRoot(),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
