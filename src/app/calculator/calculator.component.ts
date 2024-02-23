import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent
 
implements
 
OnInit {

  display: string = '0';
  firstValue: number | null = null;
  action: string | null = null;

  constructor() { }

  ngOnInit() { }

  numClick(val: string) {
    if (this.display === '0') {
      this.display = val;
    } else {
      this.display = `${this.display}${val}`;
    }
  }

  oper(action: string) {
    this.firstValue = parseFloat(this.display);
    this.action = action;
    this.display = ' ';
  }

  calculate() {
    const a = this.firstValue ?? 0;
    const b = parseFloat(this.display);
    let result:number | undefined;

    if (this.action === '+') {
      result = a + b;
    } else
 
if (this.action === '-') {
      result = a - b;
    } else
 
if (this.action === '*') {
      result = a * b;
    } else
 
if (this.action === '/') {
      result = a / b;
    }

    this.display = result !== undefined ? result.toString():'0';
  }

  clear() {
    this.display = '0';
    this.firstValue = null;
    this.action = null;
  }

}