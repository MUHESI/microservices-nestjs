import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/createUserDto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createUser(@Body() Body: CreateUserDto) {
    return this.appService.createUser({ ...Body });
  }
  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
