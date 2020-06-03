import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.less']
})
export class MainLayoutComponent {

  constructor(private authService: AuthService) { }

  onSignOut() {
    this.authService.signOut();
  }
}
