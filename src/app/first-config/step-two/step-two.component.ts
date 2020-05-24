import { Component } from '@angular/core';
import { FirstConfigService } from '../first-config.service';
import { UserService } from 'src/app/providers/user.service';

@Component({
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.less']
})
export class FirstConfigStepTwoComponent {
  public methods = [{
    type: 'email',
    name: 'Email notification'
  },
  {
    type: 'telegram',
    name: 'Telegram Bot'
  }];

  public activeMethod = 'email';
  public wordsAmount = 5;

  constructor(private userService: UserService, private firstConfigService: FirstConfigService) { }

  onMethod(method) {
    this.activeMethod = method.type;
  }

  onChangeWordsAmount(value) {
    if (value > 0 && value <= 20) {
      this.wordsAmount = value;
    } else {
      this.wordsAmount = value <= 0 ? 1 : 20;
    }
  }

  onStart() {
    const data = {
      themes: this.firstConfigService.data.themes,
      method: this.activeMethod,
      wordsAmount: this.wordsAmount
    };
    this.userService.update({ data }).subscribe({
      next: (result) => console.log(result)
    });
  }
}
