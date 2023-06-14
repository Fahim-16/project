import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-trainerregistration',
  templateUrl: './trainerregistration.component.html',
  styleUrls: ['./trainerregistration.component.css']
})
export class TrainerregistrationComponent implements OnInit { 
  
  trainreg={
    trainerFrstname:"",
    trainerLstname:"",
    trainerDob:"",
    trainerAge:"",
    trainerPhno:"",
    trainerEmail:"",
    trainerSex:"",
    trainerAddress:"",
    trainerQualifiacation:"",
    trainerCertificate:"",
    trainerusername:"",
    trainerpassword:"",
    trainerconfirmpassword:""
  }
  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
  trainerregistration()
  {

    this.api.Trainerregistration(this.trainreg).subscribe((trainreg)=>{

  })
    alert("success");
  }

}

