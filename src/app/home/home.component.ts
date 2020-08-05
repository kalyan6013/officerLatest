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
 selectedCheckboxValue:any=[];
 selectedCheckboxValue1:any;

 agencyForm: FormGroup;

 fetchcounty:any;

 displayedColumns: string[] = ['citation','FullName','County','ViolationDate','DueDate']
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

    // this.apiService.getCountyDetails().subscribe(countydata=>{
    //   this.county = countydata;
    //   console.log(this.county.countyname);
    // })

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.agencyForm = new FormGroup({
      agency:new FormControl('')
    })

    //  New Code ends
    
  }
  
   //  New Code Starts

   countyDetails(){
    this.apiService.getCitation(this.selectedCheckboxValue,this.id).subscribe((citationData:any=[])=>{
      this.citation = citationData
      console.log(this.citation);
      this.dataSource.data = this.citation;
    })
    // console.log(this.citation);
    // console.log(this.countyForm.value);
    // console.log(this.officer.OfficerID);

  }

  agencyDetails(value){
    this.apiService.getCountyDetails(value).subscribe(countydata=>{
      this.county = countydata;
      this.fetchcounty = this.county[0].countyname;
      console.log(this.fetchcounty);
    })

  }

  onRowClicked(row) {
    // console.log('Row clicked: ', row);
    this.apiService.showDetails(row);
    this.route.navigate(['/form']);
}

toggle(event,value){
  // console.log(event, value);
  
  if(event.checked == true){

    //  this.selectedCheckboxValue.push(value);
  this.selectedCheckboxValue = value;
  console.log(value);
 }
// else{
//   const index = this.selectedCheckboxValue.indexOf(value);

// if (index > -1) {
//   this.selectedCheckboxValue.splice(index, 1);
// }
// console.log(this.selectedCheckboxValue);
// }
}

agency(event,value){
  if(event.checked == true){
    this.selectedCheckboxValue1 = value;
    this.agencyDetails(value);
    console.log(value);
  }
}
  //  New Code Ends

}
