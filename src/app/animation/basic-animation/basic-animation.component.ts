import { Component, OnInit } from '@angular/core';
import { trigger,state, transition, animate, style } from "@angular/animations";

@Component({
  selector: 'cts-basic-animation',
  templateUrl: './basic-animation.component.html',
  styleUrls: ['./basic-animation.component.css'],
  animations: [
    trigger("growUpAnimation",[
      state("kid",style({
        color: 'violet',
        transform: 'scale(2)'
      })),
      state("adult",style({
        color:'blue',
        transform: 'scale(1)'
      })),
      transition('kid <=> adult', animate('5000ms ease-in'))
    ])
  ]
})
export class BasicAnimationComponent implements OnInit {

  defaultstate : String ='kid'

  animateNow= function()
  {
    this.defaultstate=this.defaultstate == 'adult'? 'kid' :'adult'
    console.log(this.defaultstate)
  }

  constructor() { }

  ngOnInit() {
  }

}
