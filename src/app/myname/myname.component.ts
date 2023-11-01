import { Component } from '@angular/core';

@Component({
  selector: 'app-myname',
  templateUrl: './myname.component.html',
  styleUrls: ['./myname.component.css']
})
export class myname {
  currentNumber = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber = false;

  getNumber(v: string): void {
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber = this.currentNumber === '0' ? v : this.currentNumber + v;
    }
  }

  getOperation(op: string): void {
    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.currentNumber);
    } else if (this.operator !== null) {
      const result = this.calculate();
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;
  }

  calculate(): number {
    if (this.firstOperand !== null && this.operator !== null) {
      if (this.operator === '+') {
        return this.firstOperand + parseFloat(this.currentNumber);
      } else if (this.operator === '-') {
        return this.firstOperand - parseFloat(this.currentNumber);
      } else if (this.operator === '*') {
        return this.firstOperand * parseFloat(this.currentNumber);
      } else if (this.operator === '/') {
        return this.firstOperand / parseFloat(this.currentNumber);
      }
    }
    return parseFloat(this.currentNumber);
  }
  

  clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}