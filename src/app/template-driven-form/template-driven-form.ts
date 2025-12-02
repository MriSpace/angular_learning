import { Component } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.html',
  styleUrls: ['./template-driven-form.css'],
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class TemplateDrivenForm {
  username = '';
  email = 'a@bc.com';
  num = '';
  dob = '';
  checkbox = true;
  usernameError = '';
  emailError = '';
  numError = '';
  password = '';
  country = '';
  fieldSelect = '';

  usernamePattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{3,8}$/;

  fields = ["CSE", "MECH", "ECE", "CIVIL"];
  countries: { code: string; name: string }[] = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'UAE', name: 'United Arab Emirates' },
    { code: 'NZ', name: 'New Zealand' }
  ];

  validateUsername() {
    if (!this.username) {
      this.usernameError = 'Username is required';
    } else if (!this.usernamePattern.test(this.username)) {
      this.usernameError = 'Must contain 1 uppercase, 1 number & 1 symbol (3-8 length)';
    } else {
      this.usernameError = '';
    }
  }

  validateEmail() {
    if (this.email.length == 0) {
      this.emailError = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
      this.emailError = 'Enter a valid email';
    } else {
      this.emailError = '';
    }
  }

  onBlur(ctrl?: NgModel) {
    if (!ctrl || !ctrl.control) return;
    try {
      ctrl.control.markAsDirty();
      ctrl.control.markAsTouched();
      ctrl.control.updateValueAndValidity();
    } catch (e) {
      // ignore if control methods are not available for some reason
    }
    // run component-level validation after updating control state
    this.validateEmail();
  }

  validateNum() {
    if (!this.num) {
      this.numError = "Number is required";
    } else if (Number(this.num) < 0 || Number(this.num) > 10) {
      this.numError = 'Enter a number between 0-10';
    } else {
      this.numError = '';
    }
  }

  // get isValid(): boolean {
  //   return (
  //     !this.usernameError &&
  //     !this.emailError &&
  //     this.username.trim().length > 0 &&
  //     this.email.trim().length > 0 && !this.numError
  //   );
  // }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', form.value);
      console.log(form)
      // Handle form submission logic here
    }
  }
}