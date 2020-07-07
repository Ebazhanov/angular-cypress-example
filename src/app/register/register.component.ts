import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidatorService} from "../services/custom-validator.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private validator: CustomValidatorService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('',
        [Validators.required, Validators.email]),
      pwGroup: new FormGroup({
        password: new FormControl(''),
        confirmPassword: new FormControl('')
      }, this.validator.comparePassword)
    });
  }

  onSubmit(): void {
  }
}
