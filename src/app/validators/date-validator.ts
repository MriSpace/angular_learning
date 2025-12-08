import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noPastDateValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;   // If no date selected yet, do nothing

  const selectedDate = new Date(control.value);
  const today = new Date();

  // Clear time (so date comparison is clean)
  today.setHours(0, 0, 0, 0);
  selectedDate.setHours(0, 0, 0, 0); //dates are saved as 2025-01-06T14:30:25. so to make the hrs min sec part 0 0 0 0, we need to give this step
  

  // If selected date is before today → error
  return selectedDate < today ? { pastDate: true } : null;
}
