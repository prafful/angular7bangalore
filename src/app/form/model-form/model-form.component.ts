import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  modelForm:any

  constructor() { }

  ngOnInit() {
    //this.modelForm.valid = true
    this.modelForm = new FormGroup({
                              name: new FormControl("", 
                                              Validators.compose([
                                                                  Validators.minLength(3), 
                                                                  Validators.pattern('^[a-zA-Z]+$')
                                                                ])),
                              email:new FormControl("", this.checkEmailLength),
                              hobby: new FormControl("")
    })
  }

  checkEmailLength(control){
    if(control.value.length < 4){
      return {'email':true}
    }
  }

  modelFormUser(user){
    console.log(user)
  }


}
