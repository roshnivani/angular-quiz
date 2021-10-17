import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/interfaces/questions';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {

  users:Array<Questions>=[]
  quiz:Questions={Que_id:0,Questions:"",opt1:"",opt2:"",opt3:"",opt4:"",correct:""}
  
  constructor(private questions:QuestionsService) {}
  
  ngOnInit(): void {
    this.loadQuiz()
  }

  loadQuiz()
  {
    this.questions.getQuestions().subscribe(resp=>{
      if(resp.data.length==0)
      {

      }
      else{
        this.users=resp.data
      }
      })
  }
}
