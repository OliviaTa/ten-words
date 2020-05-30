import { Component } from '@angular/core';
import { UserService } from '../providers/user.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent {

  public activeTab = 'themes';
  public isButtonVisible = false;

  private data = {};

  constructor(private userService: UserService) { }

  onChangeData(data) {
    if (Array.isArray(data)) {
      data = { themes: data.map((theme) => theme.id) };
    }

    this.data = {
      ...this.data,
      ...data
    };

    this.userService.tmpUser = {
      ...this.userService.tmpUser,
      ...this.data
    };

    this.isButtonVisible = true;
  }

  setActiveTab(activeTab) {
    this.activeTab = activeTab;
  }

  onSave() {
    this.userService.update({ data: this.data })
      .subscribe({
        next: (user) => {
          console.log(user);
          this.isButtonVisible = false;
        }
      });
  }

}
