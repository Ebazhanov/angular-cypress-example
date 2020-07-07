import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-angular-form';
  loginForm = false;
  registerForm = false;
  registerFormBuilder = false;

  showLoginForm(): void {
    this.loginForm = this.loginForm !== true;
    this.registerForm = false;
    this.registerFormBuilder = false;
  }

  showRegisterForm(): void {
    this.registerForm = this.registerForm !== true;
    this.loginForm = false;
    this.registerFormBuilder = false;
  }


  showRegisterFormBuilder(): void {
    this.registerFormBuilder = this.registerFormBuilder !== true;
    this.loginForm = false;
    this.registerForm = false;
  }
}
