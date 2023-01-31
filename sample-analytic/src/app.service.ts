import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './dto/createUserEvent';

@Injectable()
export class AppService {
  private readonly analytics: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated- ANALYTIC', data);
    this.analytics.push(data);
  }
}
