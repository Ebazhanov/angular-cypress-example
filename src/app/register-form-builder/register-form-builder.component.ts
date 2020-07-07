import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidatorService} from '../services/custom-validator.service';

@Component({
  selector: 'app-register-form-builder',
  templateUrl: './register-form-builder.component.html',
  styleUrls: ['./register-form-builder.component.css']
})
export class RegisterFormBuilderComponent implements OnInit {
  registerForm: FormGroup;
  countries: Array<string>;
  gender: Array<string>;
  passwordValid: boolean;
  countryValid: boolean;
  ageValid: boolean;

  constructor(private fb: FormBuilder, private validator: CustomValidatorService) {
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwGroup: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ''
      }, {validators: [this.validator.comparePassword]}),
      country: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      telephone: ['', [Validators.required]],
    }, {validators: [this.validator.validateAge, this.validator.validatePhone]});
    this.registerForm.patchValue({
      email: 'info@example.com',
      telephone: '+841234567890',
    });
    this.countries = ['Hanoi', 'Ho Chi Minh', 'Hue', 'Da Nang'];
    this.gender = ['Male', 'Female', 'Other'];
  }

  onSubmit(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.valid) {
      alert('registration success!, Your Register Info is: ' + this.registerForm.value);
    }
  }
}
