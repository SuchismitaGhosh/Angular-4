import { Component, OnInit } from '@angular/core';
//import { RemoteInfo } from 'dgram';
import { remoteserviceService } from '../../myservices/remoteservice.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Userinfo } from "../../interface/userinfo";
import { Observable } from 'rxjs';

@Component({
  selector: 'cts-consume-remoteservice',
  templateUrl: './consume-remoteservice.component.html',
  styleUrls: ['./consume-remoteservice.component.css']
})
export class ConsumeRemoteserviceComponent implements OnInit {

  userinfo:Userinfo[];

  observableUserInfo : Observable<Userinfo[]>
  constructor(private remoteservice:remoteserviceService) { 
    //console.log(remoteservice.getRemoteData());
  }

  ngOnInit() {
    this.getRemoteData()
  }

  getRemoteData()
  {
    console.log("remote data");
    this.observableUserInfo=this.remoteservice.getRemoteData();
    this.observableUserInfo.subscribe(
      user=>
      {
        this.userinfo=user
        console.log(this.userinfo)
      },
      (err:HttpErrorResponse)=>{
        if(err.error instanceof Error)
        console.log('Server Side Error')
        else{
          console.log('Client side error')
      }
      }
    )

    // this.observableUserInfo.subscribe(
    //   function(user)
    //   {
    //     this.userinfo=user
    //     console.log(this.userinfo)
    //   }
    // )
    console.log("-------------------")
  }

}
