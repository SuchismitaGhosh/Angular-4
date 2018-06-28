import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuiltdirective',
  templateUrl: './inbuiltdirective.component.html',
  styleUrls: ['./inbuiltdirective.component.css']
})
export class InbuiltdirectiveComponent implements OnInit {

  friends=['Suchismita','ashok','priya','deepak','smita']

 //friends=[]

 name='Suchi'

  constructor() { }

  ngOnInit() {
  }

}
