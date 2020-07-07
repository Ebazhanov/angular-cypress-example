import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {RegisterFormBuilderComponent} from './register-form-builder/register-form-builder.component';
import {LoginBuilderComponent} from './login-builder/login-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    RegisterComponent,
    RegisterFormBuilderComponent,
    LoginBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
