import { Component, OnInit } from '@angular/core';
import { LocalService1Service } from 'src/app/services/local-service1.service';

@Component({
  selector: 'app-consume-local-service2',
  templateUrl: './consume-local-service2.component.html',
  styleUrls: ['./consume-local-service2.component.css']
})
export class ConsumeLocalService2Component implements OnInit {

  constructor(private ls:LocalService1Service) { }

  ngOnInit() {
    console.log(this.ls.friends);
    this.ls.friends.push('fly')
  }

}
