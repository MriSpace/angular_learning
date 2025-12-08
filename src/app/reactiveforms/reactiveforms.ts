import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { noSpaceValidator } from '../validators/no-space.validator';
import { passwordMatchValidator } from '../validators/password-match.validator';
import { noPastDateValidator } from '../validators/date-validator';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
  imports: [ReactiveFormsModule,CommonModule],
  standalone: true
})
export class Reactiveforms {

  // Step 1: Create the form group
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5),noSpaceValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl(
      { value: '', disabled: true }, 
      Validators.required
    ),
    deliveryDate: new FormControl('', [noPastDateValidator]) //custom validation can just be given like this
  }, { validators: passwordMatchValidator} //cause its cross validator
   
 );
 dateDisabled:boolean = true;

  constructor() {
    // Subscribe to email control changes to enable/disable confirmPassword
    this.myForm.get('email')?.statusChanges.subscribe(() => {
      this.updateConfirmPasswordStatus();
    });
    this.myForm.get('email')?.valueChanges.subscribe(() => {
      this.updateConfirmPasswordStatus();
    });
  }

  updateConfirmPasswordStatus() {
    const emailControl = this.myForm.get('email');
    const confirmPasswordControl = this.myForm.get('confirmPassword');

    if (emailControl?.valid && emailControl?.touched) {
      confirmPasswordControl?.enable();
    } else {
      confirmPasswordControl?.disable();
    }
  }

  submitForm() {
    console.log(this.myForm.value); // prints form data
  }
}
