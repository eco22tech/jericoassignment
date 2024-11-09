import { Controller, Get, Param } from '@nestjs/common';

@Controller('app') // The base route is '/assignments'
export class AppController {

  // Endpoint to calculate the factorial of a number
  @Get('factorial/:number')
  calculateFactorial(@Param('number') number: string) {
    const num = parseInt(number, 10); // Convert the param to an integer

    if (isNaN(num) || num < 0) {
      return { error: 'Please provide a valid non-negative integer.' }; // Factorial is only defined for non-negative integers
    }

    const factorial = this.calculate(num);
    return { factorial };
  }

  // Method to calculate factorial
  private calculate(n: number): number {
    if (n === 0 || n === 1) {
      return 1; // 0! = 1 and 1! = 1
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
