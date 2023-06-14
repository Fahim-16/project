import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-clientinterface',
  templateUrl: './clientinterface.component.html',
  styleUrls: ['./clientinterface.component.css']
})
export class ClientinterfaceComponent implements OnInit {

  workout={
    workDate:"",
    workTrainername:"",
    workYourname:"",
    workExersice:"",
    workSet:"",
    workWeight:""
  }
  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
  workoutdetails(){
    this.api.Workoutdetails(this.workout).subscribe((data)=>{

    })
    alert("success")
  }

}
