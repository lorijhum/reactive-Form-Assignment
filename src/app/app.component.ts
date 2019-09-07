import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

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
     'projectName': new FormControl(null),
     'email': new FormControl(null),
     'status': new FormControl(null) 
   });
  }
  onSubmit() {
    console.log("form submitted");
    console.log(this.signupForm);
  }
 
}
