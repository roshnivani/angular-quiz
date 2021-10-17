import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) {
  }

  addCategory(user:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/addCategory",user)
  }

  getCategory():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getCategory")
  }

  deleteCategory(quizCatId:number):Observable<any>{
      return this.httpClient.delete(environment.apiUrl+"/category/"+quizCatId)
  }
}
