import { Component } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less']
})
export class SettingsComponent {
  public methods = [{
    type: 'email',
    name: 'Email notification'
  },
  {
    type: 'telegram',
    name: 'Telegram Bot'
  }];

  private user = this.userService.user;
  public activeMethod = this.user.method || 'email';
  public wordsAmount = this.user.wordsAmount || 5;

  constructor(private userService: UserService) { }

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
}
