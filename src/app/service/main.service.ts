import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponce } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = 'https://dummyjson.com/todos'
  constructor( private httpClient: HttpClient) { }

  getTodos(){
    return this.httpClient.get<ApiResponce>(this.baseUrl)
  }

}
