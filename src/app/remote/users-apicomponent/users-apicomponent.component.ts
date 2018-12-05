import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { RestApiUsersServiceService } from 'src/app/services/rest-api-users-service.service';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

  allUsers:any

  searchString:any

  constructor(private userService:RestApiUsersServiceService, private router:Router) { }

  ngOnInit() {
    this.getAPIData()
  }

  getAPIData(){
    this.userService.getRemoteUsers().subscribe((response)=>{
      this.allUsers = response
      console.log(this.allUsers)
    })
  }

  user= {
    "name":"Prafful",
    "email":"prraful@gmail.com",
    "address":{
      "geo":{
        "lat":"88.88",
        "lng":"88.88"
      }
    }
  }

  postUser(){
    this.userService.createUser(this.user).subscribe((response) => {
      console.log(response);
      this.userService.getRemoteUsers().subscribe((response)=>{
        this.allUsers = response
      })
      
    })
  }

  removeUser(id){
    this.userService.deleteUser(id).subscribe((res)=>{
      console.log(res);
      this.userService.getRemoteUsers().subscribe((response)=>{
        this.allUsers = response
      })
    })
  }

  viewDetail(id){
    console.log(id)
    //it will navigate to /remoteData/id
    //e.g. it will navigate to /remoteData/1
    //e.g. it will navigate to /remoteData/2
    this.router.navigate(["/remoteData", id])
  }

}
