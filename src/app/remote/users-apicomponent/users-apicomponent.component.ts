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

}
