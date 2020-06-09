import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-condition1',
  templateUrl: './condition1.component.html',
  styleUrls: ['./condition1.component.css']
})
export class Condition1Component implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.alldposts()
  }
root=false;
item2;
  method(name){
    this.item2 = name
  }
  allusers
  alldposts()
  {
    this.data.FetchAlldPosts().subscribe(response=>{
    this.allusers=response
    });
  }

}
