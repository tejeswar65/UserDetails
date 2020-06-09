import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  var1;var2;var3;

  FetchAllPosts()
  {
    return this.http.get(` http://localhost:5003/users`)
  }
  FetchAllmPosts()
  {
    return this.http.get(` http://localhost:5003/month_BD`)
  }
  FetchAlldPosts()
  {
    return this.http.get(` http://localhost:5003/today_BD`)
  }

}
