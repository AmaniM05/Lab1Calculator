import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {
  result = 0;

  calculate(firstNumber: string, secondNumber: string, operation: string): void {
    const first = Number(firstNumber);
    const second = Number(secondNumber);

    switch (operation) {
      case '+':
        this.result = first + second;
        break;
      case '-':
        this.result = first - second;
        break;
      case '*':
        this.result = first * second;
        break;
      case '/':
        this.result = second !== 0 ? first / second : 0;
        break;
    }
  }
}