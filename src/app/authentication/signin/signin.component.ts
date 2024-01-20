import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  emailRegex: string = "";
  error: string = ""
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', [ Validators.email, Validators.pattern(this.emailRegex)]),
      password: new FormControl('', [Validators.minLength(8)]),
    });
  }

  submit(){
    if (!this.form.valid) {
      console.log("please enter valid data");
      this.error = "Please enter correct username or password"
      
    }
    if (this.form.valid) {
      // this.submitEM.emit(this.form.value);
      console.log("form data", this.form);
      
    }
  }
}

// export class FormFieldOverviewExample {}
