import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import{Router} from '@angular/router';
import { ApiService } from '../app.service';

// New Code Starts

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

//New Code Ends

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //  New Code Starts

 officer:any=[];
 county:any=[];
 countyForm : FormGroup;
 id:any=[];
 citation:any=[];

 displayedColumns: string[] = ['citation','fullName','county','violationDate','dueDate']
 dataSource = new MatTableDataSource();
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) sort: MatSort;

 //  New Code ends

 constructor(private route:Router,private apiService:ApiService) {
  }

  ngOnInit() {

     //  New Code Starts

     this.countyForm = new FormGroup({
      county:new FormControl('')
    })

    this.apiService.getOfficerData().subscribe(officerdata=>{
      this.officer = officerdata;
      console.log(this.officer);
    })

    this.apiService.getCountyDetails().subscribe(countydata=>{
      this.county = countydata;
      console.log(this.county.countyname);
    })

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //  New Code ends
    
  }
  
   //  New Code Starts

   countyDetails(){
    this.apiService.getCitation(this.countyForm.value.county,this.id).subscribe((citationData:any=[])=>{
      this.citation = citationData
      console.log(this.citation);
      this.dataSource.data = this.citation;
    })
    // console.log(this.citation);
    console.log(this.countyForm.value);
    console.log(this.officer.OfficerID);

  }

  //  New Code Ends

}
