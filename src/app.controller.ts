import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignment') // You can change 'app' to any desired base route
export class AppController {
  // Endpoint to return Fibonacci sequence
  @Get('fibonacci/:n')
  getFibonacci(@Param('n') n: string) {
    const num = parseInt(n, 10);  // Convert the param to an integer
    if (isNaN(num) || num <= 0) {
      return { error: 'Please provide a valid positive integer.' };
    }

    // Generate Fibonacci sequence up to the nth term
    const sequence = this.generateFibonacci(num);
    return { sequence };
  }

  // Fibonacci sequence generator
  private generateFibonacci(n: number): number[] {
    const sequence = [];
    let a = 0, b = 1;
    
    for (let i = 0; i < n; i++) {
      sequence.push(a);
      [a, b] = [b, a + b]; // Update the values of a and b
    }
    return sequence;
  }
}
