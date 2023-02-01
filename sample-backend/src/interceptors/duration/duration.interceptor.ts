import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class DurationInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('FIRST INTERCEPTOR');
    const dateIn = Date.now();
    console.log('dataIn >>', dateIn);

    return next.handle().pipe(
      tap(() => {
        const dateOut = Date.now();
        console.log('dataOut >>', dateOut);
        console.log(`Request duration >> ${dateOut - dateIn} ms`);
      }),
    );
  }
}
