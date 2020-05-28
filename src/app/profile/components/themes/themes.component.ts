import { Component } from '@angular/core';
import { ProfileService } from 'src/app/profile/profile.service';

@Component({
  selector: 'app-themes-form',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.less']
})
export class ThemesComponent {

  public themes = [];

  constructor(profileService: ProfileService) {
    profileService.getThemes().subscribe({
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
