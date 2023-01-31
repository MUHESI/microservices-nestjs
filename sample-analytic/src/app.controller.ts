import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './dto/createUserEvent';
import { EmitPattern, SendCmdPattern } from './mc-config/config';

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

  @MessagePattern({ cmd: SendCmdPattern.getAnalytics })
  getAnalytics(data: CreateUserEvent) {
    return this.appService.getAnalytics();
  }
}
