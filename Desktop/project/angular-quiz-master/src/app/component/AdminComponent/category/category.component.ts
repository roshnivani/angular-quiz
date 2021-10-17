import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router,private category:CategoryService,private ts:ToastrService) { }
  cat:Category={quizCatId:0,quizCatName:""}
  users:Array<Category>=[]
  ngOnInit(): void {
    this.loadAllCategories()
  }

  saveCategory()
  {
    this.category.addCategory(this.cat).subscribe(resp=>{
      console.log(resp);
      this.router.navigateByUrl("Admin/category")
      this.ts.success(resp.msg,"Success",{timeOut:3000})
      this.ngOnInit()
    });
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
