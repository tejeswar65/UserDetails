import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detailslis',
  templateUrl: './detailslis.component.html',
  styleUrls: ['./detailslis.component.css']
})
export class DetailslisComponent implements OnInit {

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.allposts()
  }

  root=false;
  allusers;
  allposts()
  {
    this.data.FetchAllPosts().subscribe(response=>{
    this.allusers=response
    console.log(response)
    });
  }
  item2;
  method(name){
    this.item2 = name
  }
}
