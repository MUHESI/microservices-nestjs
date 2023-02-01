import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { DurationInterceptor } from './interceptors/duration/duration.interceptor';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // OTHER MIDDLEWARE

  const corsOptions = {
    origin: ['http://localhots:4200'], //
  };
  app.enableCors(corsOptions);

  app.use((req: Request, res: Response, next) => {
    console.log('FIRST MIDDLEWARE FROM main.ts');
    next();
  });

  app.use(morgan('dev'));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalInterceptors(new DurationInterceptor());
  await app.listen(process.env.PORT);
}
bootstrap();
