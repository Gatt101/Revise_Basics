import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../interfaces/data';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api_url = 'https://jsonplaceholder.typicode.com/posts'

  //  age:number = 12;
  //  payment:number = 100;

   constructor(private http: HttpClient) {
   }

   
   getPosts(): Observable<Data[]> {
    return this.http.get<Data[]>(this.api_url);
  }
  
}
