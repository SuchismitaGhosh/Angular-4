import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cts-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  hobbyForm;

  constructor() { }

  ngOnInit() {

    this.hobbyForm= new FormGroup({
      fname: new FormControl("", Validators.compose([
       // Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
     // lname: new FormControl("", Validators.compose([
       //  Validators.minLength(3)])),
       lname: new FormControl("", this.myCustomMinLength),
      hobby: new FormControl()
    });
  }
  myCustomMinLength(control)
  {
    if(control.value.length < 3)
    {
      return {'lname':true}
    }
  }
  submitUserHobby = function(user)
  {
    console.log(user)
  }

}
