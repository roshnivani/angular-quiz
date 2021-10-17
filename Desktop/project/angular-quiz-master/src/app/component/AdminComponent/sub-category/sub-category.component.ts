import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubCategory } from 'src/app/interfaces/sub-category';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent implements OnInit {

  constructor(private router:Router,private subcategory:SubCategoryService,private ts:ToastrService) { }
  users:Array<SubCategory>=[]
  subCat:SubCategory={subCatId:0,subCatName:""}
  ngOnInit(): void {
    this.loadAllSubCategory()
  }

  saveSubCategory()
  {
    this.subcategory.addSubCategory(this.subCat).subscribe(resp=>{
      console.log(resp);
      this.router.navigateByUrl("/Admin/subCategory")
      this.ts.success(resp.msg,"Success",{timeOut:3000})
      this.ngOnInit()
    });
  }
  loadAllSubCategory()
  {
    let token=localStorage.getItem("token") 
    this.subcategory.getSubCategory().subscribe(resp=>{
      if(resp.data.length==0)
      {

      }
      else{
        this.users=resp.data
      }
      })
  }

  deleteSubCategory(subCatId:number)
  {
    this.subcategory.deleteSubCategory(subCatId).subscribe(resp=>{
      let index=this.users.findIndex(user=>user.subCatId==subCatId)
      console.log("deleted == >", index);
      this.users.splice(index,1);
    })
  }

}
