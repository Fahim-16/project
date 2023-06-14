import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-admintrainer',
  templateUrl: './admintrainer.component.html',
  styleUrls: ['./admintrainer.component.css']
})
export class AdmintrainerComponent implements OnInit {

  constructor(private api:ProjectService) {
    api.trainerview().subscribe(
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
