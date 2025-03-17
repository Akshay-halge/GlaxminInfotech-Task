import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = 'https://dummyjson.com/todos'
  constructor( private httpClient: HttpClient) { }

  getTodos(){
    return this.httpClient.get<any>(this.baseUrl)
  }

  
}
