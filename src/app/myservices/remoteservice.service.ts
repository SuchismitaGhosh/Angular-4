import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userinfo } from '../interface/userinfo';

@Injectable({
  providedIn: 'root'
})
export class remoteserviceService {

   constructor(private httpclient:HttpClient) {    }

   getRemoteData():Observable<Userinfo[]>{
     return this.httpclient.get<Userinfo[]>('https://jsonplaceholder.typicode.com/users')
  }
}
