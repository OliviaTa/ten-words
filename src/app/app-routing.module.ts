import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { FirstConfigStepOneComponent } from './first-config/step-one/step-one.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [{
      path: 'first-config/choose-themes',
      component: FirstConfigStepOneComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
