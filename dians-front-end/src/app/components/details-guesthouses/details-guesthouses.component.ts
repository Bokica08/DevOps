import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { Guest } from '../adding-guestshouses/adding-guesthouses.model';
import { ListReview } from 'src/app/list-reviews.model';
import{environment} from '../../enviroment/enviroment'
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-guesthouses',
  templateUrl: './details-guesthouses.component.html',
  styleUrls: ['./details-guesthouses.component.css']
})
export class DetailsGuesthousesComponent implements OnInit{
  guest=new Guest();
  public reviews:ListReview[] | undefined;
  public avg:any | undefined;
  id:string
  constructor(private httpClient:HttpClient,private route: ActivatedRoute,private configService:ConfigService,private router: Router){}
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
    this.getReviews();
    this.configService.getAvgGrade(this.id).subscribe(
      res=>{
        this.avg=res;
        console.log(this.avg);
      }
    );
  }

    addReview(id:string)
    {
      console.log(id);
      this.router.navigate(['/review/add', id], { queryParams: { type: 'house-details' } });
    }

    public getReviews(): void {
  
      this.configService.getReviewsByLocation((Number)(this.id)).subscribe(
        
        (response: ListReview[]) => {
          this.reviews = response;
          console.log(this.reviews);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
        
      );
    }

}
