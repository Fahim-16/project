import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  write={
    writename:"",
    writetrainername:"",
    writeback:""
  }

  constructor(private api:ProjectService) { }

  ngOnInit(): void {
  }
  feed()
  {
    this.api.Feed(this.write).subscribe((write)=>{

    })
    alert("success")
  }

}
