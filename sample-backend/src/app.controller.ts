import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto, GetPaginationDTO } from './dto/userDto';
import { UpperAnFusionPipe } from './pipes/upper-an-fusion/upper-an-fusion.pipe';

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
  @Post('custompipe')
  postCustomPipe(@Body(UpperAnFusionPipe) Body) {
    return Body;
  }

  @Get('analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
