import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Guest } from './adding-guesthouses.model';
import{environment} from '../../enviroment/enviroment'
@Component({
  selector: 'app-adding-guestshouses',
  templateUrl: './adding-guestshouses.component.html',
  styleUrls: ['./adding-guestshouses.component.css']
})
export class AddingGuestshousesComponent implements OnInit{
    guest=new Guest()
    constructor(private httpClient:HttpClient){}
    ngOnInit(): void {
    }
  submit()
  {
    console.log(this.guest);
    this.httpClient.post<any>(environment.apiBaseUrl+"/guesthouse/add",this.guest)
  .subscribe(res=>{
    console.log(this.guest);
    window.location.href="/guesthouses"
    
  })
  }
  
  }
