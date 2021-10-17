import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminserviceService {

  constructor(private httpClient: HttpClient) { }
  getAlluser(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/getallusers")
  }
  getAllAdmins(): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/getalladmin")
  }

  deleteUserById(userId:number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"users/"+userId)
  }
}
