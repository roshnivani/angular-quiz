import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user_id:number=0
    email:string=""
    password:string=""
    token:string=""
  constructor(private ts:ToastrService,private users:UserService,private router:Router) { 
    
  }

  ngOnInit(): void {
  }

  authenticate()
  {
    let user={email:this.email,password:this.password,token:this.token}
    this.users.authenticate(user).subscribe(resp=>{
      console.log(resp) 
      //localStorage.setItem("token",this.token)
      if(resp.status==200 )
      {
        if(resp.data.role.role_id==1){
          this.ts.success(resp.msg,"success",{timeOut:3000})
          this.router.navigateByUrl("/superAdmin")
        }
        else if(resp.data.role.role_id==2){
          this.ts.success(resp.msg,"success",{timeOut:3000})
          this.router.navigateByUrl("/Admin")

        }else if(resp.data.role.role_id==3){
          this.ts.success(resp.msg,"success",{timeOut:3000})
          this.router.navigateByUrl("/User")
          
        }
      }
      else{
        this.ts.error(resp.msg,"Error",{timeOut:3000})
      }
    })
  }
}
