import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  today = new Date();
  displaydate = null;
  onButtonClick(value) {
    const timezones = {
      EST: 5 * 3600000,
      CST: 6 * 3600000,
      MST: 7 * 3600000,
      PST: 8 * 3600000
    };
    if (value === 'CLEAR') {
      this.displaydate = null;
    } else {
      this.displaydate = this.today - timezones[value];
    }
  }
}
