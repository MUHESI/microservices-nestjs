import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesService } from './mc-config/config';
import { FirstMiddleware } from './middlwares/first/first.middleware';

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
    consumer.apply(FirstMiddleware).forRoutes('user');
  }
}
