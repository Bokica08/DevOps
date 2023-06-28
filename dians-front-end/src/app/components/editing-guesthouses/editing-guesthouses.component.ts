import { Component, OnInit } from '@angular/core';
import { GuesthouseComponent } from '../guesthouse/guesthouse.component';
import { Guest } from '../adding-guestshouses/adding-guesthouses.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from 'src/app/config/config.service';
import { ActivatedRoute, Router} from "@angular/router";
import{environment} from '../../enviroment/enviroment'
@Component({
  selector: 'app-editing-guesthouses',
  templateUrl: './editing-guesthouses.component.html',
  styleUrls: ['./editing-guesthouses.component.css']
})
export class EditingGuesthousesComponent  implements OnInit{
  guest=new Guest();
  id:string
  constructor(private httpClient:HttpClient,private route: ActivatedRoute,private configService:ConfigService){}
  ngOnInit(): void {
    this.id = (this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.httpClient.get<Guest>(environment.apiBaseUrl+"/guesthouse/"+this.id).subscribe(
      
      (response: Guest) => {
        this.guest = response;
        console.log(this.guest);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
      }

submit()
{
  console.log(this.guest);
  this.httpClient.post<any>(environment.apiBaseUrl+"/guesthouse/edit/"+this.id,this.guest)
.subscribe(res=>{
  console.log(this.guest);
})
window.location.href = "http://localhost:4200/guesthouses";
}
}  
