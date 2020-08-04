import { Component, OnInit } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'OfficersDeclaration';
  // public userForm:FormGroup
  selectedIndex:number=0;
  
  speed=[{vehicle:"Odometer"},{vehicle:"Visual estimation"},{vehicle:"Pacing"},{vehicle:"Radar (see items 4, 5, 6, below)"},{vehicle:"Laser"},{vehicle:"Aircraft"},{vehicle:"Other (specify):"}];

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
  
  /* End of Checkbox condition for the items  */
  
  // constructor(private fb: FormBuilder) { }

// ngOnInit() {
  
  // this.example =  this.fb.group({
  //   court1: new FormControl('', Validators.required)
  // })

  userForm = new FormGroup({
    court:new FormControl(''),
    sAddress:new FormControl(''),
    mAddress:new FormControl(''),
    city:new FormControl(''),
    state:new FormControl(''),
    zip:new FormControl(''),
    bName:new FormControl(''),
    telephone:new FormControl(''),
    defendent:new FormControl(''),
    rDate:new FormControl(''),
    aoName:new FormControl(''),
    aoID:new FormControl(''),
    cNum:new FormControl(''),
    dIssued:new FormControl(''),
    aNum:new FormControl(''),
    office:new FormControl(''),
    caNum:new FormControl(''),
    name:new FormControl(''),
    cNum1:new FormControl(''),
    result:new FormControl(''),
    other:new FormControl(''),
    other1:new FormControl(''),
    sNum:new FormControl(''),
    onDate:new FormControl(''),
    atTime:new FormControl(''),
    onaDate:new FormControl(''),
    ataTime:new FormControl(''),
    fnc:new FormControl(''),
    oens:new FormControl(''),
    diagram:new FormControl(''),
    a:new FormControl(''),
    c:new FormControl(''),
    i:new FormControl(''),
    fdate:new FormControl(''),
    oName:new FormControl(''),
    idNum:new FormControl(''),
    anNum:new FormControl(''),
    sign:new FormControl(''),
    speed:new FormArray([])
    })


onChange_speed(speed:string,isChecked:boolean){
  const speedFormArray = <FormArray>this.userForm.controls.speed;
  if (isChecked) {
    speedFormArray.push(new FormControl(speed));
  } else {
    let index = speedFormArray.controls.findIndex(x => x.value == speed)
    speedFormArray.removeAt(index);
  }
}
  minDate=new Date();
  maxDate=new Date(2030, 12, 31)
  
  logChange(index){
    // this.selectedIndex = index;
    // console.log(index) ; 
  }

  // Continue funtion for going to next tab
  continue(){
    this.selectedIndex+=1;
  }

  // Back funtion for going back to previous tab
  previous(){
    this.selectedIndex-=1;
  }

  // Form submission function
  submit(post){
    // if(this.userForm.value.court != ''){
    //   console.log("checking" + this.userForm.value.court)
    // }
    console.log(post);
    // console.log(this.userForm.value.court);
    // console.log(this.selectedCheckboxValue_c +' '+ this.selectedValue_c+' '+this.userForm.value.c.value);
    // console.log(this.selectedCheckboxValue_a +' '+ this.selectedValue_a);
    // console.log(this.files);
  }

  // Error Handling for the form fields
  public errorHandling = (control: string, error: string) => {
    return this.userForm.controls[control].hasError(error);
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
    // console.log($event,value);
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
    // console.log($event,value);
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
    // console.log($event,value);
     if($event.checked == true){
      this.selectedCheckboxValue_2 = value;
      this.checkboxValue_2 = !this.checkboxValue_2;
     } else {
      this.selectedCheckboxValue_i = '';
      this.selectedValue_2='';
       this.checkboxValue_2 = !this.checkboxValue_2;
     }
  }

  /* End of Checkbox condition for the items */


  // File upload Code


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

  //End of the file upload code
}
