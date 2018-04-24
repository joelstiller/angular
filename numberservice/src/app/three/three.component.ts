import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  numbers: number[] = [];

  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.numbers = this._dataService.result_list;
  }

  pushOne() {
    this.numbers.push(this._dataService.getResult());
    this.numbers = this._dataService.result_list;
  }
}
