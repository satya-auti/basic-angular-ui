import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public showPassword: boolean = false;
  emailRegex: string = "";
  error: string = ""
  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor() {
    this.signUpForm = new FormGroup({
      username: new FormControl('', [ Validators.email, Validators.pattern(this.emailRegex)]),
      password: new FormControl('', [Validators.minLength(8)]),
    });
  }

  submit(){
    if (!this.signUpForm.valid) {
      console.log("please enter valid data");
      this.error = "Please enter correct username or password"
      
    }
    if (this.signUpForm.valid) {
      // this.submitEM.emit(this.form.value);
      console.log("form data", this.signUpForm);
      
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  
}
