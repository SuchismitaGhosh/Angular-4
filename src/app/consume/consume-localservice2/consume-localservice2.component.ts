import { Component, OnInit } from '@angular/core';
import { localserviceService } from '../../myservices/localservice.service';

@Component({
  selector: 'cts-consume-localservice2',
  templateUrl: './consume-localservice2.component.html',
  styleUrls: ['./consume-localservice2.component.css']
})
export class ConsumeLocalservice2Component implements OnInit {

  constructor(private localservice : localserviceService) { 
    console.log("I am from local service 2 component");
    console.log(localservice.sweets);
  }

  ngOnInit() {
  }

}
