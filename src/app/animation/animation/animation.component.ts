import { Component, OnInit } from '@angular/core';
import {trigger, state, transition, animate, style}  from '@angular/animations'


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("growUpAnimation", [
            state("kid", style({color:'red', transform:'scale(1)'})), 
            state("elder", style({color:'brown', transform:'scale(4)'})),
            transition('kid <=> elder', animate('300ms ease-in'))
          ])
  ]

})
export class AnimationComponent implements OnInit {

  defaultState:String = 'kid'

  constructor() { }

  ngOnInit() {
  }

  animateNow(){
    this.defaultState = this.defaultState == 'elder'?'kid':'elder'
  }


}
