import { Component, OnInit } from '@angular/core';
import { RestApiUsersServiceService } from 'src/app/services/rest-api-users-service.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  myForm:any

  constructor(private userService:RestApiUsersServiceService) { }

  ngOnInit() {
  }

  addFormUser(user){
    console.log(user);
    //this.userService.createUser(user).subscribe(res => console.log(res))
  }

}
