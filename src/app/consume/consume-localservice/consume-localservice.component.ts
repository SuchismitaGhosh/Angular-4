import { Component, OnInit } from '@angular/core';
import { localserviceService } from '../../myservices/localservice.service';

@Component({
  selector: 'cts-consume-localservice',
  templateUrl: './consume-localservice.component.html',
  styleUrls: ['./consume-localservice.component.css']
})
export class ConsumeLocalserviceComponent implements OnInit {

  constructor(private localservice : localserviceService) { 
    console.log(localservice.sweets)
    console.log(localservice.getLocalsweets());
    localservice.sweets.push('emarti');
    console.log(localservice.sweets);
  }

  ngOnInit() {
  }

}
