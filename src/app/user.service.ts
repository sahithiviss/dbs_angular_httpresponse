import { Injectable } from '@angular/core';
import { User } from './User';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_API_URL:string="http://jsonplaceholder.typicode.com/users"
  users:any[]=[];
  constructor(private httpClient:HttpClient) { }

  addUser(user:User):void{
    this.users.push(user);
  }

  listUsers():Observable<Object>{
    return this.httpClient.get(this.USER_API_URL);
   // return this.users;
  }

  findByUserId(id:number):User{
    return this.users.filter(user => user.id === id)[0];
  }

  deleteUser(id:number):void{
    this.users = this.users.filter(user => user.id !== id);
  }

}
