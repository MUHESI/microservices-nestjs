import { AppService } from './app.service';
import { CreateUserEvent } from './dto/createUserEvent';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): void;
    getAnalytics(data: CreateUserEvent): any[];
}
