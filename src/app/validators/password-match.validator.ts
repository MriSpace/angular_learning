import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  // If either is missing, do not show error yet
  if (!password || !confirmPassword) {
    return null;
  }

  // If mismatch → return error
  return password === confirmPassword ? null : { passwordMismatch: true };
}
