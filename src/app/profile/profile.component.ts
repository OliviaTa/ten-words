import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {
  public themes = [];

  constructor(private profileService: ProfileService, private router: Router) {
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
