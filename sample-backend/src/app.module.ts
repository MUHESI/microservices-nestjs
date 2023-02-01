import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesService } from './mc-config/config';
import { FirstMiddleware } from './middlewares/first.middleware';
import { logger } from './middlewares/logger.middleware';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: NamesService.COMMUNICATION,
        transport: Transport.TCP,
      },
      {
        name: NamesService.ANALYTIC,
        transport: Transport.TCP,
        options: {
          port: 3050,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FirstMiddleware)
      .forRoutes(
        'user',
        { path: 'user', method: RequestMethod.GET },
        { path: 'todo', method: RequestMethod.POST },
      )
      .apply(logger)
      .forRoutes({ path: 'todo', method: RequestMethod.POST });
  }
}
