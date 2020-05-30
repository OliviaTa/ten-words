import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/providers/user.service';

export interface SettingsOutput{
  method: string;
  wordsAmount: number;
}

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
  public settings: SettingsOutput = {
    method: this.user.method || 'email',
    wordsAmount: this.user.wordsAmount || 5
  };

  @Output() settingChange = new EventEmitter<SettingsOutput>();

  constructor(private userService: UserService) { }

  onMethod(method) {
    this.settings.method = method.type;

    this.settingChange.emit(this.settings);
  }

  onChangeWordsAmount(value) {
    if (value > 0 && value <= 20) {
      this.settings.wordsAmount = value;
    } else {
      this.settings.wordsAmount = value <= 0 ? 1 : 20;
    }

    this.settingChange.emit(this.settings);
  }
}
