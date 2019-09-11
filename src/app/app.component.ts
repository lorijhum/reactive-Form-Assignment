import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactive-Form-Assignment';
  signupForm: FormGroup;
  statusArry = ['Stable', 'Critical', 'Finished'];
  selectedStatus = '';
  
  ngOnInit(){
   this.signupForm = new FormGroup({
    //  'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName]),
     'projectName': new FormControl(null, Validators.required, this.forbiddenProjectName),
     'email': new FormControl(null, [Validators.required, Validators.email]),
     'projectStatus': new FormControl(null) 
   });
  
  }
  onSubmit() {
    console.log("form submitted");
    console.log(this.signupForm);
  }

  /* forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test' ) {
      return {'nameIsForbidden': true};
    }
    //note you do not return false, you return null or nothing for false
    return null;
  } */

   //creating an async custom validator to simulate reaching out to server for response
   forbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'Test') {
          resolve({'nameIsForbidden': true});
        }else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  
 
}
