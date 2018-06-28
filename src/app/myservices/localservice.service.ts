import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class localserviceService {

  sweets=['Rasogulla','Gulapjamun','Katli', 'jalebi']

  constructor() { }

getLocalsweets()
{
return "These are local sweets"
}

}
