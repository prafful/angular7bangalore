import { Component, OnInit } from '@angular/core';
import { LocalService1Service } from 'src/app/services/local-service1.service';

@Component({
  selector: 'app-consume-remote-data',
  templateUrl: './consume-remote-data.component.html',
  styleUrls: ['./consume-remote-data.component.css']
})
export class ConsumeRemoteDataComponent implements OnInit {

  users:any

  constructor(private ls:LocalService1Service) { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.ls.getRemoteData().subscribe((response) => {
      console.log(response);
      this.users = response
    })
  }

}
