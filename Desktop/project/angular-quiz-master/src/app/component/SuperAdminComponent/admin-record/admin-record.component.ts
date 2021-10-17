import { Component, OnInit } from '@angular/core';
import { SuperAdminserviceService } from 'src/app/services/super-adminservice.service';
import{User} from  "../../../interfaces/user"

@Component({
  selector: 'app-admin-record',
  templateUrl: './admin-record.component.html',
  styleUrls: ['./admin-record.component.css']
})
export class AdminRecordComponent implements OnInit {
  data:Array<User>=[];
  name!:String;
  constructor(superAdminserviceService:SuperAdminserviceService) {
    superAdminserviceService.getAllAdmins().subscribe(data=>{
      this.data=data.data;
       this.data.forEach(x=>{
         console.log(x);
       })
    })
   }

  ngOnInit(): void {
  }

  search()
  {
      if(this.name=="")
      {
        this.ngOnInit()
      }
      else{
        this.data=this.data.filter(a=>{
          return a.name.toLowerCase().match(this.name.toLowerCase());
        })
      }
  }


  delete(userId:any)
  {
    console.log("working"+userId);
    this.ngOnInit();

  }

}
