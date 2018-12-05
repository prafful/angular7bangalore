import { Component, OnInit } from '@angular/core';
import { RestApiUsersServiceService } from 'src/app/services/rest-api-users-service.service';

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

  allUsers:any

  constructor(private userService:RestApiUsersServiceService) { }

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

}
