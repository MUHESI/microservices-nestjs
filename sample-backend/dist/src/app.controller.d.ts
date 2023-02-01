import { AppService } from './app.service';
import { CreateUserDto, GetPaginationDTO } from './dto/userDto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(queryParams: GetPaginationDTO): string;
    createUser(Body: CreateUserDto): CreateUserDto;
    postCustomPipe(Body: any): any;
    getAnalytics(): import("rxjs").Observable<any>;
}
