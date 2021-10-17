import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-super-admin-category',
  templateUrl: './super-admin-category.component.html',
  styleUrls: ['./super-admin-category.component.css']
})
export class SuperAdminCategoryComponent implements OnInit {

  constructor(private category:CategoryService) { }
  users:Array<Category>=[]
  ngOnInit(): void {
    this.loadAllCategories()
  }

  loadAllCategories()
  {
    //let token=localStorage.getItem("token") 
    this.category.getCategory().subscribe(resp=>{
      if(resp.data.length==0)
      {

      }
      else{
        this.users=resp.data
      }
      })
  }

  deleteUser(quizCatId:number)
  {
    this.category.deleteCategory(quizCatId).subscribe(resp=>{
      let index=this.users.findIndex(user=>user.quizCatId==quizCatId)
      console.log("deleted == >", index);
      this.users.splice(index,1);
    })
  }
}
