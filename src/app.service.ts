import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  functionSuma(a: number, b: number): number {
    return a+b;
    
    let rpta = functionSuma(5, 2);
    console.log(rpta);
  }

 
}
