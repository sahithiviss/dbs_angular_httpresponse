import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:Object;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService
    .listUsers()
    .subscribe(response =>{
    console.log(response);
  });
}

  findById(id):User{
    return this.userService.findByUserId(id);
  }

}
