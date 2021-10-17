import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from 'src/app/interfaces/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private router:Router,private quizz:QuizService,private ts:ToastrService) { }

  quiz:Quiz={quiz_id:0,quizName:"",no_que:0,deuctionOf:0,code:"",startDate:new Date(),endDate:new Date(),active:false,negative:false,public:true,marks:0,pointPerQue:0}
  ngOnInit(): void {
  }

  saveQuiz()
  {
    this.quizz.addQuiz(this.quiz).subscribe(resp=>{
      console.log(resp);
      this.router.navigateByUrl("/Admin/listQuiz")
      this.ts.success(resp.msg,"Success",{timeOut:3000})
    });
  }

  

}
