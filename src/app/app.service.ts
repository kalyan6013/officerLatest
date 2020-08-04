import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public getData(){
    return this.httpClient.get(`http://localhost:3000/officer`);
  }

  // New Code Starts

  public getOfficerData(){
    return this.httpClient.get(`https://5f2907c2a1b6bf0016eace3c.mockapi.io/register/1`);
  }

  public getCountyDetails(){
    return this.httpClient.get(`https://5f2907c2a1b6bf0016eace3c.mockapi.io/county/1`);
  }

  public getCitation(county,id){
    console.log(county);
    return this.httpClient.get(`https://5f2907c2a1b6bf0016eace3c.mockapi.io/citations?County=`+county+`&&OfficerID=A0234G`);
  }
  // New Code Ends
}