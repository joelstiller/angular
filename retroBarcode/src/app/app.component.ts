import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RetroBarcode';
  colors = [];

  fillColors() {
    for (let x = 0; x < 10; x++) {
      const randnum = Math.floor(Math.random() * 9) + 1;
      if (randnum === 1) {
        this.colors.push('Aqua');
      } else if (randnum === 2) {
        this.colors.push('Black');
      } else if (randnum === 3) {
        this.colors.push('CornflowerBlue');
      } else if (randnum === 4) {
        this.colors.push('BlueViolet');
      } else if (randnum === 5) {
        this.colors.push('DarkRed');
      } else if (randnum === 6) {
        this.colors.push('DarkSlaeGray');
      } else if (randnum === 7) {
        this.colors.push('Fuchsia');
      } else if (randnum === 8) {
        this.colors.push('GhostWhite');
      } else if (randnum === 9) {
        this.colors.push('MidnightBlue');
      } else if (randnum === 10) {
        this.colors.push('RebeccaPurple');
      }
    }
  }

  ngOnInit() {
    this.fillColors();
  }
}
