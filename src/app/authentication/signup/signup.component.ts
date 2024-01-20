import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  emailRegex: string = "";
  passwordMatch: boolean = false;

  error: string = ""
  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  constructor() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)]),

      email: new FormControl('', [ Validators.email, Validators.required, Validators.pattern(this.emailRegex)]),
      password: new FormControl('', [Validators.minLength(8), Validators.required, ]),
      cPassword: new FormControl('', [Validators.minLength(8), Validators.required, this.passwordsMatchValidator()]),
    });

    if (this.signUpForm.value.password === this.signUpForm.value.cPassword) {
      this.passwordMatch = false;
    }else {
      this.passwordMatch = true;
    }

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
  
  public toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  private passwordsMatchValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = this.signUpForm.get('password')?.value;
      const cPassword = control.value;

      return password === cPassword ? null : { 'passwordsNotMatch': true };
    };
  }
}
