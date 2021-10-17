import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {
   }

   addUser(user:any):Observable<any>{
     return this.httpClient.post(environment.apiUrl+"/addUser",user)
   }

    authenticate(user:any):Observable<any>
    {
      return this.httpClient.post(environment.apiUrl+"/authenticate",user)
    }
}
