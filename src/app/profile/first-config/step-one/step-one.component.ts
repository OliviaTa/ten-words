import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirstConfigService } from '../first-config.service';

@Component({
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.less']
})
export class FirstConfigStepOneComponent {

  public themes = [];

  constructor(
    private firstConfigService: FirstConfigService,
    private router: Router,
  ) { }

  onNext() {

    this.firstConfigService.data.themes = this.themes
      .filter((theme) => theme.isActive)
      .map((theme) => theme.id);
    console.log(this.firstConfigService.data);

    if (this.firstConfigService.data.themes.length !== 0) {
      this.router.navigateByUrl('first-config/settings');
    }

  }

}
