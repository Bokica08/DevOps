import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ConfigService } from 'src/app/config/config.service';
import { ListReview } from 'src/app/list-reviews.model';
import { Hut } from '../adding-huts/adding-huts.model';
import{environment} from '../../enviroment/enviroment'
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-alpinehut',
  templateUrl: './details-alpinehut.component.html',
  styleUrls: ['./details-alpinehut.component.css']
})
export class DetailsAlpinehutComponent implements OnInit{
  public reviews:ListReview[] | undefined;
  public avg:any | undefined;
  hut=new Hut();
  id:string
  constructor(private httpClient:HttpClient,private route: ActivatedRoute,private configService:ConfigService,private router: Router){}
  ngOnInit(): void {
    this.id = (this.route.snapshot.paramMap.get('id'));
    console.log(this.id);
    this.httpClient.get<Hut>(environment.apiBaseUrl+"/alpinehut/"+this.id).subscribe(
      
      (response: Hut) => {
        this.hut = response;
        console.log(this.hut);
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
    console.log(this.avg);
    
      }
    addReview(id:string)
    {
      console.log(id);
      this.router.navigate(['/review/add', id], { queryParams: { type: 'hut-details' } });

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
