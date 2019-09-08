import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
     'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectName]),
     'email': new FormControl(null, [Validators.required, Validators.email]),
     'status': new FormControl(null) 
   });
  
  }
  onSubmit() {
    console.log("form submitted");
    console.log(this.signupForm);
  }

  forbiddenProjectName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'Test' ) {
      return {'nameIsForbidden': true};
    }
    //note you do not return false, you return null or nothing for false
    return null;
  }

  
 
}
