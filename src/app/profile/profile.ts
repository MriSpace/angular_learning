import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  username: string = "Mrinal"; //interpolation
  isEditDisabled: boolean = false; 
  displayName: string = "";

  updateName(){
    this.displayName = this.username
  }


}





//NEWWWWWW

// import { Component } from "@angular/core";
// import { FormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.html',
//   styleUrl: './profile.css',
//   imports: [FormsModule, CommonModule],
//   standalone: true
// })
// export class Profile {
//   username = '';
//   email = '';

//   usernameError = '';
//   emailError = '';

//   usernamePattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{3,8}$/;

//   validateUsername() {
//     if (!this.username) {
//       this.usernameError = 'Username is required';
//     }
//     else if (!this.usernamePattern.test(this.username)) {
//       this.usernameError = 'Must contain 1 uppercase, 1 number & 1 symbol (3-8 length)';
//     }
//     else {
//       this.usernameError = '';
//     }
//   }

//   validateEmail() {
//     if (!this.email) {
//       this.emailError = 'Email is required';
//     }
//     else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
//       this.emailError = 'Enter a valid email';
//     }
//     else {
//       this.emailError = '';
//     }
//   }

//   get isValid(): boolean {
//     return (
//       !this.usernameError &&
//       !this.emailError &&
//       this.username.trim().length > 0 &&
//       this.email.trim().length > 0
//     );
//   }
// }
