import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.numbers = this._dataService.beta_numbers;
  }

  pushOne() {
    this.numbers.push(this._dataService.generateNumber());
    this.numbers = this._dataService.beta_numbers;
  }
}
