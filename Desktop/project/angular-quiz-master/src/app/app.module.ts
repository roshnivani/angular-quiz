import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { SuperAdminComponent } from './component/SuperAdminComponent/super-admin/super-admin.component';
import { UserComponentComponent } from './component/UserComponent/user-component/user-component.component';
import { SuperHeaderComponent } from './component/super-header/super-header.component';
import { SuperAdminHeaderComponent } from './component/SuperAdminComponent/super-admin-header/super-admin-header.component';
import { AdminComponentComponent } from './component/AdminComponent/admin/admin-component.component';
import { AdminHeaderComponent } from './component/AdminComponent/admin-header/admin-header.component';
import { UserHeaderComponent } from './component/UserComponent/user-header/user-header.component';
import { SubCategoryComponent } from './component/AdminComponent/sub-category/sub-category.component';
import { QuizComponent } from './component/AdminComponent/quiz/quiz.component';
import { ResultComponent } from './component/UserComponent/result/result.component';
import { ProfileComponent } from './component/UserComponent/profile/profile.component';
import { CategoryComponent } from './component/AdminComponent/category/category.component';
import { ListQuizComponent } from './component/AdminComponent/list-quiz/list-quiz.component';
import { SuperAdminCategoryComponent } from './component/SuperAdminComponent/super-admin-category/super-admin-category.component';
import { SuperAdminSubCategoryComponent } from './component/SuperAdminComponent/super-admin-sub-category/super-admin-sub-category.component';
import { SuperAdminQuizComponent } from './component/SuperAdminComponent/super-admin-quiz/super-admin-quiz.component';
import { UserRecordComponent } from './component/SuperAdminComponent/user-record/user-record.component';
import { AdminRecordComponent } from './component/SuperAdminComponent/admin-record/admin-record.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShowQuizComponent } from './component/AdminComponent/show-quiz/show-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    AdminComponentComponent,
    SuperAdminComponent,
    UserComponentComponent,
    SuperHeaderComponent,
    CategoryComponent,
    SuperAdminHeaderComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    SubCategoryComponent,
    QuizComponent,
    ResultComponent,
    ProfileComponent,
    ListQuizComponent,
    SuperAdminCategoryComponent,
    SuperAdminSubCategoryComponent,
    SuperAdminQuizComponent,
    UserRecordComponent,
    AdminRecordComponent,
    ShowQuizComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    ToastContainerModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
