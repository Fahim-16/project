import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-trainlist',
  templateUrl: './trainlist.component.html',
  styleUrls: ['./trainlist.component.css']
})
export class TrainlistComponent implements OnInit {

  constructor(private api:ProjectService) {
    api.listtrainers().subscribe(
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
