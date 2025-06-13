import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  suma(a:number , b:number): number{
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }

  functionSuma(a: number, b: number): number {
    return a+b;
    
    let rpta = functionSuma(5, 2);
    console.log(rpta);
  }

 
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("No se puede dividir por cero.");
  }
  return a / b;
}

