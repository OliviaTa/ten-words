import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FirstConfigStepOneComponent } from './first-config/step-one/step-one.component';
import { FirstConfigStepTwoComponent } from './first-config/step-two/step-two.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: '**',
        redirectTo: 'sign-in'
      }
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'first-config/choose-themes',
        component: FirstConfigStepOneComponent
      },
      {
        path: 'first-config/settings',
        component: FirstConfigStepTwoComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
