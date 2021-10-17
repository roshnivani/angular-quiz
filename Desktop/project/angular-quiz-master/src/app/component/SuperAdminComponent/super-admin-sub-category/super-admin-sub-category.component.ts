import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/interfaces/sub-category';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-super-admin-sub-category',
  templateUrl: './super-admin-sub-category.component.html',
  styleUrls: ['./super-admin-sub-category.component.css']
})
export class SuperAdminSubCategoryComponent implements OnInit {

  constructor(private subcategory:SubCategoryService) { }
  users:Array<SubCategory>=[]
  ngOnInit(): void {
    this.loadAllSubCategory()
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
