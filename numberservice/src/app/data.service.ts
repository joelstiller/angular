import { Injectable } from '@angular/core';
import { empty } from 'rxjs/Observer';

@Injectable()
export class DataService {
  alpha_numbers: number[] = [];
  beta_numbers: number[] = [];
  result_list: number[] = [];

  constructor() {}

  generateNumber(): number {
    return Math.floor(Math.random() * Math.floor(10));
  }

  getResult(): number {
    const alpha_sum = this.getSum(this.alpha_numbers),
      beta_sum = this.getSum(this.beta_numbers);
    return alpha_sum - beta_sum;
  }

  getSum(array: number[]): number {
    let temp = 0;
    if (array.length === 0) {
      return temp;
    }
    for (const value of array) {
      temp += value;
    }
    return temp;
  }
}
