import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

export interface IUser {
  fName: string;
  lName: string;
  email: string;
}

@Injectable()
export class AppService {
  private readonly users: IUser[] = [];
  // constructor() {}

  getHello(): string {
    return 'Hello World!';
  }
  handleUserCreated(data) {
    console.log('handleUserCreated - COMMUNICATIONS >>', data);
  }
}
