import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HospitalComponent } from './hospital/hospital.component';
import { OrdersComponent } from './orders/orders.component';
import { HeaderComponent } from './header/header.component';
import { HospitalAddComponent } from './hospital-add/hospital-add.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddproductComponent } from './productlist/addproduct/addproduct.component';
import { EditproductComponent } from './productlist/editproduct/editproduct.component';
import { AddorderComponent } from './orders/addorder/addorder.component';
import { EditorderComponent } from './orders/editorder/editorder.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { AdminComponent } from './admin/admin.component';
import { UserviewComponent } from './userview/userview.component';
import { ProfileComponent } from './profile/profile.component';
import { UserscreenComponent } from './userscreen/userscreen.component';
const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent

  },
  {
    path:'department',
    component:DepartmentComponent
  },
  {
    path:'hospital',
    component:HospitalComponent
  },
  {
    path:'orders',
    component:OrdersComponent
  },
  {
    path:'hospital-add',
    component:HospitalAddComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'reports',
    component:ReportsComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'products',
    component:ProductlistComponent
  },
  {
    path:'addproduct',
    component:AddproductComponent
  },
  {
    path:'editproduct/:id',
    component:EditproductComponent
  },
  {
    path:'addOrder',
    component: AddorderComponent
  },
  {
    path:'editOrder/:id',
    component: EditorderComponent
  },
  {path:'editUser/:id',
  component:EdituserComponent
},
{path:'userscreen',
component:UserscreenComponent
},
{path:'profile',
component:ProfileComponent},
{path:'userview',
component:UserviewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
