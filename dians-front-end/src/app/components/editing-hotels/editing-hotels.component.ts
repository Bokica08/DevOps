import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import {Hotel} from '../adding-hotels/adding-hotels.model'
import{environment} from '../../enviroment/enviroment'
@Component({
  selector: 'app-editing-hotels',
  templateUrl: './editing-hotels.component.html',
  styleUrls: ['./editing-hotels.component.css']
})
export class EditingHotelsComponent implements OnInit{
  hotel=new Hotel();
  id:string
  constructor(private httpClient:HttpClient,private route: ActivatedRoute,private configService:ConfigService){}
  ngOnInit(): void {
    this.id = (this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.httpClient.get<Hotel>(environment.apiBaseUrl+"/hotel/"+this.id).subscribe(
      
      (response: Hotel) => {
        this.hotel = response;
        console.log(this.hotel);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
      }

submit()
{
  console.log(this.hotel);
  this.httpClient.post<any>(environment.apiBaseUrl+"/hotel/edit/"+this.id,this.hotel)
.subscribe(res=>{
  console.log(this.hotel);
})
window.location.href = "http://localhost:4200/hotels";
}
}
