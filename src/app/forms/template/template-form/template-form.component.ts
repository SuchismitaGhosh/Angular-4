import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  submitUserHobby=function(user)
  {
    console.log("User clicked on submit button")
    console.log(user)
  }

  constructor() { }

  ngOnInit() {
  }

}
