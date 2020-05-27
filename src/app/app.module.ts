import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { FirstConfigComponent } from './first-config/first-config.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FirstConfigStepOneComponent } from './first-config/step-one/step-one.component';
import { FirstConfigService } from './first-config/first-config.service';
import { FirstConfigStepTwoComponent } from './first-config/step-two/step-two.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,

    AuthComponent,
    SignInComponent,
    SignUpComponent,

    FirstConfigComponent,
    FirstConfigStepOneComponent,
    FirstConfigStepTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    FirstConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
