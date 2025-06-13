import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }
}
