import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  
  constructor(private api:ProjectService) { 
    api.feedview().subscribe(
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
