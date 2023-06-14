import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-clientregistration',
  templateUrl: './clientregistration.component.html',
  styleUrls: ['./clientregistration.component.css']
})
export class ClientregistrationComponent implements OnInit {

  clientreg={
    clientfrstname:"",
    clientlstname:"",
    clientdob:"",
    clientage:"",
    clientphno:"",
    clientemail:"",
    clientheight:"",
    clientweight:"",
    clientsex:"",
    clientaddress:"",
    clientmedical:"",
    clientgoal:"",
    clientusername:"",
    clientpassword:"",
    clientconfirmpassword:""
  }

  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
  clientregistration()
  {
    this.api.Clientregistration(this.clientreg).subscribe((clientreg)=>{
    })
    alert("success");
  }

}
