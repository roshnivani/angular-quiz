import { SignupComponent } from './component/signup/signup.component';
import { SuperAdminComponent } from './component/SuperAdminComponent/super-admin/super-admin.component';
import { SuperHeaderComponent } from './component/super-header/super-header.component';
import { UserComponentComponent } from './component/UserComponent/user-component/user-component.component';
import { SuperRoutingModule } from './component/SuperAdminComponent/super-routing/super-routing.module';
import { AdminRoutingModule } from './component/AdminComponent/admin-routing/admin-routing.module';
import { AdminComponentComponent } from './component/AdminComponent/admin/admin-component.component';
import { AdminHeaderComponent } from './component/AdminComponent/admin-header/admin-header.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { CategoryComponent } from './component/AdminComponent/category/category.component';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './component/UserComponent/user-routing/user-routing.module';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"adminHeader",component:AdminHeaderComponent},
  {path:"superAdmin",component:SuperAdminComponent},
  {path:"Admin",component:AdminComponentComponent},
  {path:"User",component:UserComponentComponent},
  {path:"category",component:CategoryComponent},
  {path:"superHeader",component:SuperHeaderComponent},
  {path:"",component:SignupComponent},
  {path:'superAdmin',loadChildren:()=>SuperRoutingModule},
  {path:'Admin',loadChildren:()=>AdminRoutingModule},
  {path:'User',loadChildren:()=>UserRoutingModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
