import { Component } from '@angular/core';
import { FirstConfigService } from '../first-config.service';
import { UserService } from 'src/app/providers/user.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.less']
})
export class FirstConfigStepTwoComponent {

  private data = {
    themes: this.firstConfigService.data.themes,
  };

  constructor(
    private userService: UserService,
    private firstConfigService: FirstConfigService,
    private router: Router
  ) {
    if (this.data.themes.length === 0){
      this.router.navigateByUrl('/first-config/choose-themes');
    }
   }

  onSettingsChange(settings) {
    this.data = {
      ...this.data,
      ...settings
    };
  }

  onStart() {
    this.userService.update({ data: this.data }).subscribe({
      next: (result) => {
        console.log(result);
        this.router.navigateByUrl('/profile');
      }
    });
  }
}
