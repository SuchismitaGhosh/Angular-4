import { Component, OnInit } from '@angular/core';
//import { clearLine } from '@readline';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  task= ["Learn angular 6","java","SQL"];
  oneTask="";

  money=50;
  myDate=new Date()

  scores=[1,9,2,10,5,3,42,7]
  addTask=function()
  {
    console.log("AddTask Called");
    this.task.push(this.oneTask)
    this.oneTask=""
  }
  removeTask=function(received)
  {
    console.log("Removing This Task");
    this.task.splice(received,1)
  }
  constructor() { }

  ngOnInit() {
  }

}
