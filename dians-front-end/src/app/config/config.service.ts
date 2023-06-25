import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { environment } from '../enviroment/enviroment';
import { AlpineHut } from '../alpinehut';
import { GuestHouse } from '../guest-house.model';
import { CampSite } from '../camp-site.model';
import { ListReview } from '../list-reviews.model';

@Injectable({providedIn: 'root'})
export class ConfigService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}
  public getHuts(): Observable<AlpineHut[]> {
    
    return this.http.get<AlpineHut[]>(`${this.apiServerUrl}/alpinehut`);
    
  }

  public getEmployees(): Observable<Employee[]> {
    
    return this.http.get<Employee[]>(`${this.apiServerUrl}/hotel`);
    
  }
  public getHouses(): Observable<GuestHouse[]> {
    
    return this.http.get<GuestHouse[]>(`${this.apiServerUrl}/guesthouse`);
    
  }
  public getCamps(): Observable<CampSite[]> {
    
    return this.http.get<CampSite[]>(`${this.apiServerUrl}/campsite`);
    
  }
  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/hotel/add`, employee);
  }


  public updateEmployee(employeeId: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiServerUrl}/hotel/edit/${employeeId}`);
  }


  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/location/delete/${employeeId}`);
  }
  public deleteHut(hutid: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/location/delete/${hutid}`);
  }
  public deleteHouse(houseid: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/location/delete/${houseid}`);
  }
  public deleteCamp(campid: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/location/delete/${campid}`);
  }
  public getByCity(city:string):Observable<Employee[]>{
    let queryParams= new HttpParams();
    queryParams=queryParams.append("city",city)
    return this.http.get<Employee[]>(`${this.apiServerUrl}/hotel/city`,{params:queryParams})
  }
  public getByCityHut(city:string):Observable<AlpineHut[]>{
    let queryParams= new HttpParams();
    queryParams=queryParams.append("city",city)
    return this.http.get<AlpineHut[]>(`${this.apiServerUrl}/alpinehut/city`,{params:queryParams})
  }
  public getByCityHouse(city:string):Observable<GuestHouse[]>{
    let queryParams= new HttpParams();
    queryParams=queryParams.append("city",city)
    return this.http.get<GuestHouse[]>(`${this.apiServerUrl}/guesthouse/city`,{params:queryParams})
  }
  public getByCityCamp(city:string):Observable<CampSite[]>{
    let queryParams= new HttpParams();
    queryParams=queryParams.append("city",city)
    return this.http.get<CampSite[]>(`${this.apiServerUrl}/campsite/city`,{params:queryParams})
  }

  public getByName(name:string):Observable<Employee[]>{
    let queryParams=new HttpParams();
    queryParams=queryParams.append("name",name)
    return this.http.get<Employee[]>(`${this.apiServerUrl}/hotel/cname`,{params:queryParams})
  }
  public getByNameHut(name:string):Observable<AlpineHut[]>{
    let queryParams=new HttpParams();
    queryParams=queryParams.append("name",name)
    return this.http.get<AlpineHut[]>(`${this.apiServerUrl}/alpinehut/cname`,{params:queryParams})
  }
  public getByNameHouse(name:string):Observable<GuestHouse[]>{
    let queryParams=new HttpParams();
    queryParams=queryParams.append("name",name)
    return this.http.get<GuestHouse[]>(`${this.apiServerUrl}/guesthouse/cname`,{params:queryParams})
  }
  public getByNameCamp(name:string):Observable<CampSite[]>{
    let queryParams=new HttpParams();
    queryParams=queryParams.append("name",name)
    return this.http.get<CampSite[]>(`${this.apiServerUrl}/campsite/cname`,{params:queryParams})
  }

  public getByStars(stars:number):Observable<Employee[]>{
    let queryParams=new HttpParams();
    queryParams=queryParams.append("stars",stars)
    return this.http.get<Employee[]>(`${this.apiServerUrl}/hotel/stars`,{params:queryParams});
  }
  public getGHouse(id:number):Observable<GuestHouse[]>{
    let queryParams=new HttpParams();
    return this.http.get<GuestHouse[]>(`${this.apiServerUrl}/guesthouse/${id}`);
  }

  public getUser(username:string):Observable<any>{
    let queryParams=new HttpParams();
    queryParams=queryParams.append("username",username)
    return this.http.get<CampSite[]>(`${this.apiServerUrl}/user/get`,{params:queryParams})
  }

  public getReviewsByLocation(locationId:number):Observable<ListReview[]>{
    let queryParams=new HttpParams();
    queryParams=queryParams.append("locationId",locationId)
    return this.http.get<ListReview[]>(`${this.apiServerUrl}/review/location`,{params:queryParams});
  }
  public getAvgGrade(id:string):Observable<any>{
    
  return  this.http.get<any>("http://localhost:8080/location/grade/"+id);
}
}