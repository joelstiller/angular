let myNum: Number = 5;
let myString: String = 'Hello Universe';
let myArr: number[] = [1, 2, 3, 4];
let myObj: any = { name: 'Bill' };
let anythingVariable: any = 'hey';
anythingVariable = 25;
let arrayOne: boolean[] = [true, false, true, true];
let arrayTwo: any[] = [1, 'abc', true, 2];
myObj.x = 5;
myObj.y = 10;
class MyNode {
  private _priv: number;

  constructor(public val: number) {}

  doSomething(): void {
    this._priv = 10;
  }
}

const myNodeInstance: MyNode = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(): void {
  console.log('Hello World');
  return;
}
function sendingErrors(): never {
  throw new Error('Error message');
}
