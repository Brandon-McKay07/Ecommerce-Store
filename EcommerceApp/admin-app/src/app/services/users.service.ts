//services are used to share data across components

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private HttpClient: HttpClient) { }


  
  getUsers(){
     return this.HttpClient.get<any[]>('../../assets/json/user.json')
    //  consumes the data from the user.json file
    // once it gets data from HTTP client it returns Observable
    //called within the comonents.
  } 

  
}
