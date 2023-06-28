import { Component, OnInit } from '@angular/core';
import {Hut} from './adding-huts.model'
import { HttpClient } from '@angular/common/http';
import{environment} from '../../enviroment/enviroment'
@Component({
  selector: 'app-adding-huts',
  templateUrl: './adding-huts.component.html',
  styleUrls: ['./adding-huts.component.css']
})
export class AddingHutsComponent implements OnInit{
  hut=new Hut()
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
  }
submit()
{
  console.log(this.hut);
  this.httpClient.post<any>(environment.apiBaseUrl+"/alpinehut/add",this.hut)
.subscribe(res=>{
  console.log(this.hut);
  window.location.href="/huts"
})
}
}
