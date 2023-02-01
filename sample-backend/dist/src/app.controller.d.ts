import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { CreateUserDto, GetPaginationDTO } from './dto/userDto';
export declare class AppController {
    private readonly appService;
    private readonly configService;
    constructor(appService: AppService, configService: ConfigService);
    testDotenv(): any;
    getHello(queryParams: GetPaginationDTO): string;
    createUser(Body: CreateUserDto): CreateUserDto;
    postCustomPipe(Body: any): any;
    getAnalytics(): import("rxjs").Observable<any>;
}
