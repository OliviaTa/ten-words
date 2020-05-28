import { Component } from '@angular/core';
import { FirstConfigService } from '../first-config.service';
import { UserService } from 'src/app/providers/user.service';

@Component({
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.less']
})
export class FirstConfigStepTwoComponent {

  constructor(private userService: UserService, private firstConfigService: FirstConfigService) { }

  onStart() {
    const data = {
      themes: this.firstConfigService.data.themes,
      // method: this.activeMethod,
      // wordsAmount: this.wordsAmount
    };
    this.userService.update({ data }).subscribe({
      next: (result) => console.log(result)
    });
  }
}
