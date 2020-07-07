import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  profile = {
    username: 'Bob',
    email: 'abc@def.com',
    facebook: 'facebook.com',
    twitter: 'twitter.com',
    website: 'example.com',
    tel: '1234-5678-90'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit(profileForm: FormsModule): void {
    console.log(profileForm);
    throw new Error('Something went wrong');
  }
}
