import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 // myForm:FormGroup
  constructor(private user:UserService,private router:Router,private ts:ToastrService) { 
    // this.myForm=new FormGroup({
    //   name:new FormControl("",[Validators.required]),
    //   email:new FormControl("",[Validators.required]),
    //   password:new FormControl("",[Validators.required])
    // })
  }
  user1:User={role:{role_id:0},userId:0,name:"",email:"",password:"",token:""}
  ngOnInit(): void {
  }

  saveUser()
  {
    console.log(this.user1);
    this.user.addUser(this.user1).subscribe(resp=>{
      console.log(resp);
      this.router.navigateByUrl("/login")
      this.ts.success(resp.msg,"Success",{timeOut:3000})
    });
  }
}
