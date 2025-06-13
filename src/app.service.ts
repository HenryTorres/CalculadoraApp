import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  suma(a:number , b:number): number{
    return a - b;
  }
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

