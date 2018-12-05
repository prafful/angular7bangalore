import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LocalService1Service {

  constructor(private http:HttpClient) { }

  friends = ['ola','uber','zap']


  returnMessage(){
    return "Hurray!!!!"
  }

  sayHelloService1(){
    console.log("Service 1 function is called!!!!");
  }

 

}
