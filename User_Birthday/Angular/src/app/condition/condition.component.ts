import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.allmposts()
  }
root=false;
item2;
  method(name){
    this.item2 = name
  }
  allusers
  allmposts()
  {
    this.data.FetchAllmPosts().subscribe(response=>{
    this.allusers=response
    });
  }

}
