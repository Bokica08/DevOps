import { Component, OnInit } from '@angular/core';
import {Hotel} from './adding-hotels.model'
import { HttpClient } from '@angular/common/http';
import{environment} from '../../enviroment/enviroment'
@Component({
  selector: 'app-adding-hotels',
  templateUrl: './adding-hotels.component.html',
  styleUrls: ['./adding-hotels.component.css']
})
export class AddingHotelsComponent implements OnInit{
  hotel=new Hotel()
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
  }
submit()
{
  console.log(this.hotel);
  this.httpClient.post<any>(environment.apiBaseUrl+"/hotel/add",this.hotel)
.subscribe(res=>{
  console.log(this.hotel);
  window.location.href="/hotels"
  
})
}
}
