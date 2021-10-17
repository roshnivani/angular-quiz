import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient:HttpClient) { }

  addQuiz(user:any):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/addQuiz",user)
  }

  getQuiz():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/getQuiz")
  }

  deleteQuiz(quiz_id:number):Observable<any>{
    return this.httpClient.delete(environment.apiUrl+"/quiz/"+quiz_id)
}

}
