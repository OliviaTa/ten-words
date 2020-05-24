import { Component } from '@angular/core';
import { FirstConfigService } from '../first-config.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.less']
})
export class FirstConfigStepOneComponent {

  public themes = [];

  constructor(private firstConfigService: FirstConfigService, private router: Router) {
    firstConfigService.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;
      }
    });
  }

  onThemeClick(id: string) {
    const foundTheme = this.themes.find((theme) => {
      return theme.id === id;
    });
    foundTheme.isActive = !foundTheme.isActive;
  }

  onNext() {

    this.firstConfigService.data.themes = this.themes
      .filter((theme) => theme.isActive)
      .map((theme) => theme.id);
    console.log(this.firstConfigService.data);

    if (this.firstConfigService.data.themes.length !== 0){
      this.router.navigateByUrl('first-config/settings');
    }

  }

}
