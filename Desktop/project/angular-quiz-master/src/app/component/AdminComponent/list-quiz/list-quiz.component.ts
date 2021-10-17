import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Questions } from 'src/app/interfaces/questions';
import { Quiz } from 'src/app/interfaces/quiz';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizService } from 'src/app/services/quiz.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {
  users:Array<Quiz>=[]
  data: any = [[]];
  quiz:Quiz={quiz_id:0,quizName:"",no_que:0,deuctionOf:0,code:"",startDate:new Date(),endDate:new Date(),active:false,negative:false,public:true,marks:0,pointPerQue:0}
  
  constructor(private quiz1:QuizService,private questions:QuestionsService,private router:Router,private ts:ToastrService) { }
 // que:Questions={Que_id:0,Questions:"",opt1:"",opt2:"",opt3:"",opt4:"",correct:""}
  ngOnInit(): void {
    this.loadQuiz()
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      // console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
      this.questions.addQuestions(this.data.slice(1)).subscribe(resp=>{
        this.router.navigateByUrl("showQuiz")
        console.log("file resp",resp);
        
      },err => {
        console.log("file resp",err);
      })
      console.log("file data",this.data);

      //Excel data will store in this variable
      let x = this.data.slice(1);
      console.log(x);

    };

    reader.readAsBinaryString(target.files[0]);

  }
  loadQuiz()
  {
    this.quiz1.getQuiz().subscribe(resp=>{
      if(resp.data.length==0)
      {

      }
      else{
        this.users=resp.data
      }
      })
  }

  deleteQuiz(quiz_id:number)
  {
    this.quiz1.deleteQuiz(quiz_id).subscribe(resp=>{
      let index=this.users.findIndex(user=>user.quiz_id==quiz_id)
      console.log("deleted == >", index);
      this.users.splice(index,1);
    })
  }

  // addFile()
  // {
  //   this.questions.addQuestions(this.que).subscribe(resp=>{
  //     this.router.navigateByUrl("/quiz")
  //     this.ts.success(resp.msg,"Success",{timeOut:3000})
  //   }
  //     )   
  // }
}
