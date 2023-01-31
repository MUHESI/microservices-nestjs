import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { CreateUserEvent } from './dto/createUserEvent';
import { AppService } from './app.service';
import { EmitPattern } from './mc-config/config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern(EmitPattern.userCreated)
  handleUserCreated(data: CreateUserEvent) {
    this.appService.handleUserCreated(data);
  }
}
