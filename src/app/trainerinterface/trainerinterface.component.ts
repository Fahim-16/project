import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-trainerinterface',
  templateUrl: './trainerinterface.component.html',
  styleUrls: ['./trainerinterface.component.css']
})
export class TrainerinterfaceComponent implements OnInit {

  constructor(private api:ProjectService) {
    api.clinetwork().subscribe(
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

