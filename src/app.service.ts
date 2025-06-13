import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

