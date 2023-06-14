import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-trainerlist',
  templateUrl: './trainerlist.component.html',
  styleUrls: ['./trainerlist.component.css']
})
export class TrainerlistComponent implements OnInit {

  constructor(private api:ProjectService) {
    api.listtrainer().subscribe(
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
