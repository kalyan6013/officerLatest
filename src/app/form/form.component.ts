import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import{Router} from '@angular/router';
import { ApiService } from '../app.service';

// New Code Starts

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

//New Code Ends

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // New Code Starts


  // New Code Starts

  selectedIndex:number=0;

  fileName:any
  size:any
 diagram:any=[];
 diagram1: any=[];
 user:any;

//  New Code Starts

 officer:any=[];
  citationData:any=[];

 
 //  New Code ends

 userForm: FormGroup

  
  // speed=[{vehicle:"Odometer"},{vehicle:"Visual estimation"},{vehicle:"Pacing"},{vehicle:"Radar (see items 4, 5, 6, below)"},{vehicle:"Laser"},{vehicle:"Aircraft"}];

  /* Start of Checkbox condition for the items */
  selectedValue_a:any;
  selectedValue_c:any;
  selectedValue_i:any;
  selectedValue_2:any

  selectedCheckboxValue_a:any;
  selectedCheckboxValue_c:any;
  selectedCheckboxValue_i:any;
  selectedCheckboxValue_2:any;

  checkboxValue_a:boolean=true;
  checkboxValue_c:boolean=true;
  checkboxValue_i:boolean=true;
  checkboxValue_2:boolean=true;
  checkboxValue_4:boolean=true;
  checkboxValue_5:boolean=true;
  checkboxValue_6:boolean=true;
  
  /* End of Checkbox condition for the items  */

  constructor(private route:Router,private apiService:ApiService) { }
  
  ngOnInit() {

    //New code starts
    // console.log(this.apiService.data);
    
      this.citationData = this.apiService.data;

     // New code ends

    this.apiService.getData().subscribe((data)=>{
      this.user = data;

    this.userForm = new FormGroup({
      court:new FormControl(this.user[0].court),
      sAddress:new FormControl(this.user[0].sAddress),
      mAddress:new FormControl(this.user[0].mAddress),
      city:new FormControl(this.user[0].city),
      state:new FormControl(this.user[0].state),
      zip:new FormControl(this.user[0].zip),
      bName:new FormControl(this.user[0].bName),
      telephone:new FormControl(this.user[0].tel),
      defendent:new FormControl(''),
      rDate:new FormControl(this.user[0].rDate),
      aoName:new FormControl(this.user[0].aoName),
      aoID:new FormControl(this.user[0].aoID),
      cNum:new FormControl(this.user[0].cNum),
      dIssued:new FormControl(this.user[0].dIssued),
      aNum:new FormControl(this.user[0].aNum),
      office:new FormControl(this.user[0].office),
      caNum:new FormControl(this.user[0].caNum),
      name:new FormControl(''),
      isPeaceOfficerOnDuty:new FormControl(false),
      isForExclusivePurposeOfTrafficEnforcement:new FormControl(false),
      isWearingUniform:new FormControl(false),
      isOffenseCommittedInPresence:new FormControl(false),
      c:new FormControl(''),
      isDefendantStatementVerbatim:new FormControl(false),
      isVehicleSafetyViolated:new FormControl(false),
      isEquipmentProperlyMaintained:new FormControl(false),
      isTrafficSignSignalDeviceProperlyVisible:new FormControl(false),
      isDiagramSubmittedAccurate:new FormControl(false),
      isSpeedSignificantFactor:new FormControl(false),
      vehicleCalibrationDate:new FormControl(''),
      vehicleCalibrationResult:new FormControl(''),
      isCalibrationConsideredDuringSpeedDetermination:new FormControl(false),
      isDefendantIdentifiedByDL:new FormControl(false),
      isDefendantIdentifiedByOther:new FormControl(false),
      DefendantIdentifiedByOtherDescription:new FormControl(''),
      isOdometerUsed:new FormControl(false),
      isVisualEstimationUsed:new FormControl(false),
      isPacingUsed:new FormControl(false),
      isRadarUsed:new FormControl(false),
      isLaserUsed:new FormControl(false),
      isAircraftUsed:new FormControl(false),
      isOtherMethodUsed:new FormControl(''),
      OtherMethodDescription:new FormControl(''),
      isETSurveyNotRequired:new FormControl(false),
      isETSCompletedWithinFiveAndSevenYears:new FormControl(false),
      isETSCompletedWithinSevenAndTenYears:new FormControl(false),
      isETSattached:new FormControl(false),
      isETSOnFileWithCourt:new FormControl(false),
      isOfficerCompletedRadarOperatorCourse:new FormControl(false),
      isOfficerCompletedLaserOperatorCourse:new FormControl(false),
      isSpeedMeasuringDeviceUsed:new FormControl(false),
      speedMeasuringDeviceSerialNumber:new FormControl(''),
      isEquipmentAccuracyCheckConducted:new FormControl(false),
      EquipmentAccuracyCheckConductedOn:new FormControl(''),
      EquipmentAccuracyCheckConductedAgainOn:new FormControl(''),
      isHighwaySectionEvaluatedByEngineer:new FormControl(false),
      officerFactsAndCircumstances:new FormControl(''),
      officerEvidenceAndStatements:new FormControl(''),
      diagramFiles:new FormControl(''),
      declarationSubmittedOn:new FormControl(new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString()),
      oName: new FormControl(''),
      idNum:new FormControl(''),
      agencyNCICNumber:new FormControl(''),
      officerSignature:new FormControl(''),
      })
    })

    //  New Code Starts

   
    this.apiService.getOfficerData().subscribe(officerdata=>{
      this.officer = officerdata;
      // console.log(this.officer);
    })
    //  New Code ends
  }
  
 
  // Form submission function
  submit(post){
    let finalOutput ={
      "agencyNCICNumber": post.agencyNCICNumber,
      "officerDeclaration": {
        "isPeaceOfficerOnDuty": post.isPeaceOfficerOnDuty,
        "isForExclusivePurposeOfTrafficEnforcement": post.isForExclusivePurposeOfTrafficEnforcement,
        "isWearingUniform": post.isWearingUniform,
    "isOffenseCommittedInPresence": post.isOffenseCommittedInPresence,
    "isDefendantStatementVerbatim": post.isDefendantStatementVerbatim,
    "isVehicleSafetyViolated": post.isVehicleSafetyViolated,
    "isEquipmentProperlyMaintained": post.isEquipmentProperlyMaintained,
    "isTrafficSignSignalDeviceProperlyVisible": post.isTrafficSignSignalDeviceProperlyVisible,
    "isDiagramSubmittedAccurate": post.isDiagramSubmittedAccurate,
    "isSpeedSignificantFactor": post.isSpeedSignificantFactor,
    "vehicleCalibrationDate": post.vehicleCalibrationDate,
    "vehicleCalibrationResult": post.vehicleCalibrationResult,
    "isCalibrationConsideredDuringSpeedDetermination": post.isCalibrationConsideredDuringSpeedDetermination,
    "isDefendantIdentifiedByDL": post.isDefendantIdentifiedByDL,
    "isDefendantIdentifiedByOther": post.isDefendantIdentifiedByOther,
    "DefendantIdentifiedByOtherDescription": post.DefendantIdentifiedByOtherDescription,
    "isOdometerUsed": post.isOdometerUsed,
    "isVisualEstimationUsed": post.isVisualEstimationUsed,
    "isPacingUsed": post.isPacingUsed,
    "isRadarUsed": post.isRadarUsed,
    "isLaserUsed": post.isLaserUsed,
    "isAircraftUsed": post.isAircraftUsed,
    "isOtherMethodUsed": post.isOtherMethodUsed,
    "OtherMethodDescription": post.OtherMethodDescription,
    "isETSurveyNotRequired": post.isETSurveyNotRequired,
    "isETSCompletedWithinFiveAndSevenYears": post.isETSCompletedWithinFiveAndSevenYears,
    "isETSCompletedWithinSevenAndTenYears": post.isETSCompletedWithinSevenAndTenYears,
    "isETSattached": post.isETSattached,
    "isETSOnFileWithCourt": post.isETSOnFileWithCourt,
    "ETS": this.diagram1,
    "isOfficerCompletedRadarOperatorCourse": post.isOfficerCompletedRadarOperatorCourse,
    "isOfficerCompletedLaserOperatorCourse": post.isOfficerCompletedLaserOperatorCourse,
    "isSpeedMeasuringDeviceUsed": post.isSpeedMeasuringDeviceUsed,
    "speedMeasuringDeviceSerialNumber": post.speedMeasuringDeviceSerialNumber,
    "isEquipmentAccuracyCheckConducted": post.isEquipmentAccuracyCheckConducted,
    "EquipmentAccuracyCheckConductedOn": post.EquipmentAccuracyCheckConductedOn,
    "EquipmentAccuracyCheckConductedAgainOn": post.EquipmentAccuracyCheckConductedAgainOn,
    "isHighwaySectionEvaluatedByEngineer": post.isHighwaySectionEvaluatedByEngineer,
    "officerFactsAndCircumstances": post.officerFactsAndCircumstances,
    "officerEvidenceAndStatements": post.officerEvidenceAndStatements,
    "diagramFiles": this.diagram,
    "declarationSubmittedOn": post.declarationSubmittedOn,
    "officerSignature": "/a/" + post.officerSignature
      }
    }
    console.log("output", JSON.stringify(finalOutput));
    console.log(post);
    this.userForm.reset();
    // window.location.reload();
    // console.log(post);
  }

  /* Start of Checkbox condition for the items */

  onChange_a($event,value){
    // console.log($event,value);
     if($event.checked == true){
      this.selectedCheckboxValue_a = value;
      this.checkboxValue_a = !this.checkboxValue_a;
     } else {
      this.selectedCheckboxValue_a = '';
      this.selectedCheckboxValue_a = '';
       this.checkboxValue_a = !this.checkboxValue_a;
     }
  }

  onChange_c($event,value){
     if($event.checked == true){
      this.selectedCheckboxValue_c = value;
      this.checkboxValue_c = !this.checkboxValue_c;
     } else {
      this.selectedCheckboxValue_c = '';
      this.selectedValue_c='';
       this.checkboxValue_c = !this.checkboxValue_c;
     }
  }

  onChange_i($event,value){
     if($event.checked == true){
      this.selectedCheckboxValue_i = value;
      this.checkboxValue_i = !this.checkboxValue_i;
     } else {
      this.selectedCheckboxValue_i = '';
      this.selectedValue_i='';
       this.checkboxValue_i = !this.checkboxValue_i;
     }
  }

  onChange_2($event,value){
     if($event.checked == true){
      this.selectedCheckboxValue_2 = value;
      this.checkboxValue_2 = !this.checkboxValue_2;
     } else {
      this.selectedCheckboxValue_i = '';
      this.selectedValue_2='';
       this.checkboxValue_2 = !this.checkboxValue_2;
     }
  }

  onChange_4($event,value){
     if($event.checked == true){
      // this.selectedCheckboxValue_2 = value;
      this.checkboxValue_4 = !this.checkboxValue_4;
     } else {
      // this.selectedCheckboxValue_i = '';
      // this.selectedValue_2='';
       this.checkboxValue_4 = !this.checkboxValue_4;
     }
  }

  onChange_5($event,value){
    // console.log($event,value);
     if($event.checked == true){
      this.checkboxValue_5 = !this.checkboxValue_5;
     } else {
       this.checkboxValue_5 = !this.checkboxValue_5;
     }
  }

  onChange_6($event,value){
    // console.log($event,value);
     if($event.checked == true){
      this.checkboxValue_6 = !this.checkboxValue_6;
     } else {
       this.checkboxValue_6 = !this.checkboxValue_6;
     }
  }

  /* End of Checkbox condition for the items */


  // Start of File upload Code for diagram


  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
    this.diagram.pop(index);
  }

  /**
   * Simulate the upload process
   */
  // uploadFilesSimulator(index: number) {
  //   setTimeout(() => {
  //     if (index === this.files.length) {
  //       return;
  //     } else {
  //       const progressInterval = setInterval(() => {
  //         if (this.files[index].progress === 100) {
  //           clearInterval(progressInterval);
  //           this.uploadFilesSimulator(index + 1);
  //         } else {
  //           this.files[index].progress += 5;
  //         }
  //       }, 200);
  //     }
  //   }, 1000);
  // }

  changeFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        
    });
}

// Start of Code for converting image to Blob

blobUrl:any
fileBlob: any;

b64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  // console.log(b64Data.toString().split(',')[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});

  //Converting Blob to Base64

  // this.blobToBase64(blob);
  return blob;
}

// End of Code for converting image to Blob

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      const type = item.type;
      this.changeFile(item).then((base64: string): any => {
            const base64Data =base64.toString().split(',')[1];

            //Final blob conversion from Base64

            this.fileBlob = this.b64toBlob(base64Data, type);
            let file={size:item.size,fileName:item.name,blobName:this.fileBlob};
       this.diagram.push(file);
    })
    
    // this.uploadFilesSimulator(0);
  }
}


//Start of Code check for the conversion of blob to base64

// blobToBase64 = (blob) => {
//   var reader = new FileReader();
//   reader.onload = function() {
//       var dataUrl = reader.result;
//       var base64 = dataUrl.toString().split(',')[1];
//       console.log("Blob to Base 64 " + base64);
//   };
//   reader.readAsDataURL(blob);
// };

//End of Code check for the conversion of blob to base64

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  //End of the file upload code for diagram



  // Start of File upload Code for ETS


  files1: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped1($event) {
    this.prepareFilesList1($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler1(files1) {
    this.prepareFilesList1(files1);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile1(index: number) {
    this.files1.splice(index, 1);
    this.diagram1.pop(index);
  }

  /**
   * Simulate the upload process
   */
  // uploadFilesSimulator(index: number) {
  //   setTimeout(() => {
  //     if (index === this.files.length) {
  //       return;
  //     } else {
  //       const progressInterval = setInterval(() => {
  //         if (this.files[index].progress === 100) {
  //           clearInterval(progressInterval);
  //           this.uploadFilesSimulator(index + 1);
  //         } else {
  //           this.files[index].progress += 5;
  //         }
  //       }, 200);
  //     }
  //   }, 1000);
  // }

  changeFile1(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
        
    });
}

// Start of Code for converting image to Blob

blobUrl1:any
fileBlob1: any;

b64toBlob1 = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  // console.log(b64Data.toString().split(',')[1]);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob1 = new Blob(byteArrays, {type: contentType});

  //Converting Blob to Base64

  // this.blobToBase64(blob);
  return blob1;
}

// End of Code for converting image to Blob

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList1(files1: Array<any>) {
    for (const item of files1) {
      item.progress = 0;
      this.files1.push(item);
      const type = item.type;
      this.changeFile1(item).then((base64: string): any => {
            const base64Data =base64.toString().split(',')[1];

            //Final blob conversion from Base64

            this.fileBlob1 = this.b64toBlob(base64Data, type);
            let file1={size:item.size,fileName:item.name,blobName:this.fileBlob1};
       this.diagram1.push(file1);
    })
    
    // this.uploadFilesSimulator(0);
  }
}


//Start of Code check for the conversion of blob to base64

// blobToBase64 = (blob) => {
//   var reader = new FileReader();
//   reader.onload = function() {
//       var dataUrl = reader.result;
//       var base64 = dataUrl.toString().split(',')[1];
//       console.log("Blob to Base 64 " + base64);
//   };
//   reader.readAsDataURL(blob);
// };

//End of Code check for the conversion of blob to base64

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes1(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  //End of the file upload code for ETS

  // New Code Starts

  retHome(){
    this.route.navigate(['/']);
  }

  // New Code Ends
}

