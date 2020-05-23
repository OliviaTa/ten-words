import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { FirstConfigComponent } from './first-config/first-config.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FirstConfigStepOneComponent } from './first-config/step-one/step-one.component';
import { FirstConfigService } from './first-config/first-config.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainLayoutComponent,

    FirstConfigComponent,
    FirstConfigStepOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    FirstConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
