import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';

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

 selectedRowIndex: number = -1;

 showMsg: boolean = false;

 agencyForm: FormGroup;

 fetchcounty:any;

 showMsg1:boolean;

 displayedColumns: string[] = ['checkbox','citation','FullName','County','ViolationDate','DueDate']
 dataSource = new MatTableDataSource();
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) sort: MatSort;

 //  New Code ends

 constructor(private route:Router,private apiService:ApiService) {
  }

  ngOnInit() {

     //  New Code Starts

     this.countyForm = new FormGroup({
      county:new FormControl(false, Validators.required)
    },[this.validateIfChecked()])

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
  validateIfChecked(): import("@angular/forms").ValidatorFn {
    return (form: FormGroup): ValidationErrors | null => {
      const checked = form.get('county');
     
      if (checked) {
        this.showMsg1= false
        return {
          'err': true
        };
      } else {
        this.showMsg1 = true
      }
      return null;
    }
  }
  
   //  New Code Starts

   countyDetails(value1){
     console.log(value1)
    if(value1.county === true){
      this.showMsg1 = false
      this.apiService.getCitation(this.selectedCheckboxValue,this.id).subscribe((citationData:any=[])=>{
        this.citation = citationData
        console.log(this.citation);
        this.dataSource.data = this.citation;
        console.log(this.dataSource.data);
        this.showMsg= true;
      })
    } else {
      this.showMsg1 = true
    }
    // this.apiService.getCitation(this.selectedCheckboxValue,this.id).subscribe((citationData:any=[])=>{
    //   this.citation = citationData
    //   console.log(this.citation);
    //   this.dataSource.data = this.citation;
    //   console.log(this.dataSource.data);
    //   this.showMsg= true;
      
    // })
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
    this.selectedRowIndex = row.id;
    this.apiService.showDetails(row);
    setTimeout(() => {
    this.route.navigate(['/form']);
    },2000);
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
  onChangeCheck(this, $event){
    if($event.checked == true){

  }
}
  }
