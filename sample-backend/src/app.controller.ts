import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, GetPaginationDTO } from './dto/userDto';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() queryParams: GetPaginationDTO): string {
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
