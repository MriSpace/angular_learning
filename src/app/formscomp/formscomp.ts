import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-forms',
  templateUrl: './formscomp.html',
  styleUrl: './formscomp.css',
  imports: [FormsModule, CommonModule],
  standalone: true
})
export class Forms {
  username = '';
  email = '';
  num = '';

  usernameError = '';
  emailError = '';
  numError = '';

  usernamePattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{3,8}$/;

  validateUsername() {
    if (!this.username) {
      this.usernameError = 'Username is required';
    }
    else if (!this.usernamePattern.test(this.username)) {
      this.usernameError = 'Must contain 1 uppercase, 1 number & 1 symbol (3-8 length)';
    }
    else {
      this.usernameError = '';
    }
  }

  validateEmail() {
    if (!this.email) {
      this.emailError = 'Email is required';
    }
    else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
      this.emailError = 'Enter a valid email';
    }
    else {
      this.emailError = '';
    }
  }
  
  validateNum(){
    if(!this.num){
      this.numError = "Number is required";
    
    }
    else if(Number(this.num)<0 || Number(this.num)>10)
    {
      this.numError = 'Enter a number between 0-10';
    }
    else{
      this.numError = '';
    }
  }

  get isValid(): boolean {
    return (
      !this.usernameError &&
      !this.emailError &&
      this.username.trim().length > 0 &&
      this.email.trim().length > 0 && !this.numError
    );
  }
}
