import { Component } from '@angular/core';
import { FirstConfigService } from '../first-config.service';

@Component({
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.less']
})
export class FirstConfigStepOneComponent {

  public themes = [];

  constructor(private firstConfigServer: FirstConfigService) {
    firstConfigServer.getThemes().subscribe({
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

}
