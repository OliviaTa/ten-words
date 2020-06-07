import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data) { }

  dismissNotification() {
    this.data.preClose();
  }

}
