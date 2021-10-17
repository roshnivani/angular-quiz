import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponentComponent } from '../user-component/user-component.component';

import { UserHeaderComponent } from '../user-header/user-header.component';
import { ResultComponent } from '../result/result.component';
import { ProfileComponent } from '../profile/profile.component';
import { CategoryComponent } from '../../AdminComponent/category/category.component';
import { ListQuizComponent } from '../../AdminComponent/list-quiz/list-quiz.component';

const routes: Routes = [
  {path:'',component:UserComponentComponent,

  children:[
    {path:'User',component:UserComponentComponent},
    {path:"userheader",component:UserHeaderComponent},
    {path:"result", component:ResultComponent},
    {path:"profile", component:ProfileComponent},
    {path:"Quiz", component:ListQuizComponent}
  ]
},
 
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
