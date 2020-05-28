import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { FirstConfigComponent } from './profile/first-config/first-config.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FirstConfigStepOneComponent } from './profile/first-config/step-one/step-one.component';
import { FirstConfigService } from './profile/first-config/first-config.service';
import { FirstConfigStepTwoComponent } from './profile/first-config/step-two/step-two.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { ThemesComponent } from './profile/components/themes/themes.component';
import { SettingsComponent } from './profile/components/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,

    AuthComponent,
    SignInComponent,
    SignUpComponent,

    FirstConfigComponent,
    FirstConfigStepOneComponent,
    FirstConfigStepTwoComponent,

    ProfileComponent,
    ThemesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService,
    FirstConfigService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
