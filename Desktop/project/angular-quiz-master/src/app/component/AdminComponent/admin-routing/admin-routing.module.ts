import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentComponent } from '../admin/admin-component.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from '../category/category.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { SubCategoryComponent } from '../sub-category/sub-category.component';
import { QuizComponent } from '../quiz/quiz.component';
import { ListQuizComponent } from '../list-quiz/list-quiz.component';
import { ShowQuizComponent } from '../show-quiz/show-quiz.component';


const routes: Routes = [
  {path:'',component:AdminComponentComponent,

  children:[

    {path:'Admin',component:AdminComponentComponent},
    {path:"category",component:CategoryComponent},
    {path:"AdminHeader", component:AdminHeaderComponent},
    {path:"subCategory", component:SubCategoryComponent},
    {path:"quiz", component:QuizComponent},
    {path:"category", component:CategoryComponent},
    {path:"listQuiz", component:ListQuizComponent},
    {path:"showQuiz",component:ShowQuizComponent}
    
  ]
},
 
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
