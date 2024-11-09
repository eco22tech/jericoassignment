import { Controller, Get, Param } from '@nestjs/common';

@Controller('app') // The base route is '/assignments'
export class AppController {
  
  // Endpoint to check if a number is prime
  @Get('prime/:number')
  checkPrime(@Param('number') number: string) {
    const num = parseInt(number, 10);  // Convert the param to an integer

    if (isNaN(num) || num <= 1) {
      return { isPrime: false };  // Numbers less than 2 are not prime
    }

    const isPrime = this.isPrime(num);
    return { isPrime };
  }

  // Method to check if a number is prime
  private isPrime(num: number): boolean {
    if (num <= 1) return false; // 1 and below are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {  // Only check up to square root of num for efficiency
      if (num % i === 0) {
        return false;  // Found a divisor, so it's not prime
      }
    }
    return true;  // No divisors found, it's primee
  }
}
