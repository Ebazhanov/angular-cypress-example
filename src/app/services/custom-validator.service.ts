import {Injectable} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() {
  }

  comparePassword(c: AbstractControl): ValidationErrors | null {
    const v = c.value;
    return (v.password === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }

  validateAge(c: AbstractControl): ValidationErrors | null {
    const v = c.value;
    return (Number(v.age) > 18 || v.age === '') ? null : {
      ageNotValid: true
    };
  }

  validatePhone(c: AbstractControl): ValidationErrors | null {
    const v = c.value;
    return (v.telephone.match(/^\+84\d{9,10}$/)) ? null : {
      telephoneNotValid: true
    };
  }
}
