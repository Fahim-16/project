import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-adminclient',
  templateUrl: './adminclient.component.html',
  styleUrls: ['./adminclient.component.css']
})
export class AdminclientComponent implements OnInit {

  constructor(private api:ProjectService) {
    api.clientview().subscribe(
      (Response)=>{
        this.data=Response
      }
    )
   }

  ngOnInit(): void {
  }
  data:any=[
    
  ]
}
