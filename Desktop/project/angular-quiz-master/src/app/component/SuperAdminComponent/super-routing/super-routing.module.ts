import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from '../super-admin/super-admin.component';
import { SuperAdminHeaderComponent } from '../super-admin-header/super-admin-header.component';
import { LoginComponent } from '../../login/login.component';
import { SuperAdminCategoryComponent } from '../super-admin-category/super-admin-category.component';
import { SuperAdminSubCategoryComponent } from '../super-admin-sub-category/super-admin-sub-category.component';
import { SuperAdminQuizComponent } from '../super-admin-quiz/super-admin-quiz.component';
import { UserRecordComponent } from '../user-record/user-record.component';
import { AdminRecordComponent } from '../admin-record/admin-record.component';
import { AgGridModule } from 'ag-grid-angular';


const routes: Routes = [
  {path:'',component:SuperAdminComponent,

  children:[
    {path:"SuperAdmin",component:SuperAdminComponent},

    {path:"login",component:LoginComponent},
    {path:"header",component:SuperAdminHeaderComponent},
    {path:"Category",component:SuperAdminCategoryComponent},
    {path:"SubCategory", component:SuperAdminSubCategoryComponent},
    {path:"Quiz", component:SuperAdminQuizComponent},
    {path:"Users",component:UserRecordComponent},
    {path:"Admins",component:AdminRecordComponent},
    {path:"header",component:SuperAdminHeaderComponent}

  ]
}  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([])
  ],
  exports:[RouterModule]
})
export class SuperRoutingModule { }
