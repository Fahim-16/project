import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  Trainerregistration(trainreg:any){

    return this.http.post<any>('http://localhost:3000/trainerregistration',trainreg)
  }
  Clientregistration(clientreg:any){
    
    return this.http.post<any>('http://localhost:3000/clientregistration', clientreg)
  }
  Workoutdetails(workout:any){
    return this.http.post<any>('http://localhost:3000/clientinterface', workout)
  }
  Feed(write:any)
  {
    return this.http.post<any>('http://localhost:3000/feed',write)

  }
  listtrainer=()=>{

   return this.http.get('https://localhost:3000/trainerlist')

  }
  trainerview=()=>{
    return this.http.get('http://localhost:3000/admintrainer')
  }
  clientview=()=>{
    return this.http.get('http://localhost:3000/adminclient')
  }
  clinetwork=()=>{
    return this.http.get('http://localhost:3000/trainerinterface')
  }
  listtrainers=()=>{
    return this.http.get('http://localhost:3000/trainlist')
  }
  feedview=()=>{
    return this.http.get('http://localhost:3000/adminfeedback')
  }
 
}

