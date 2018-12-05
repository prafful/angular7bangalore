import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RestApiUsersServiceService } from 'src/app/services/rest-api-users-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  activePath:any

  selectedUser:any

  constructor(private active:ActivatedRoute, private userService: RestApiUsersServiceService) { }

  ngOnInit() {
    this.activePath = this.active.snapshot.paramMap.get("myid")
    console.log(this.activePath);
    this.getUser(this.activePath)
  }

  getUser(id){
    this.userService.getOneUser(id).subscribe((ohmygod)=>{
      this.selectedUser = ohmygod
    })
  }


}
