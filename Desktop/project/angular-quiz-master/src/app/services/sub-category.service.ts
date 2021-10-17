import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(private httpClient:HttpClient) { }

  addSubCategory(user:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/addSubCategory",user)
  }

  getSubCategory():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getSubCategory")
  }

  deleteSubCategory(subCatId:number):Observable<any>{
      return this.httpClient.delete(environment.apiUrl+"/subcategory/"+subCatId)
  }
  

}
