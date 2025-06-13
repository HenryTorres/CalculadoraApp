import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  restar(a:number , b:number): number{
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  sumar(a: number, b: number): number {
    return a+b;
  }
 
 divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
    return a / b;
  }
}
