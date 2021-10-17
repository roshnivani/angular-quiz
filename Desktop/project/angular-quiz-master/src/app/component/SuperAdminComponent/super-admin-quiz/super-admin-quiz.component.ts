import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/interfaces/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-super-admin-quiz',
  templateUrl: './super-admin-quiz.component.html',
  styleUrls: ['./super-admin-quiz.component.css']
})
export class SuperAdminQuizComponent implements OnInit {

  constructor(private quiz1: QuizService) { }
  users: Array<Quiz> = []
  ngOnInit(): void {
    this.loadQuiz()
  }
  loadQuiz() {
    this.quiz1.getQuiz().subscribe(resp => {
      if (resp.data.length == 0) {

      }
      else {
        this.users = resp.data
      }
    })
  }

  deleteQuiz(quiz_id: number) {
    this.quiz1.deleteQuiz(quiz_id).subscribe(resp => {
      let index = this.users.findIndex(user => user.quiz_id == quiz_id)
      console.log("deleted == >", index);
      this.users.splice(index, 1);
    })
  }


}
