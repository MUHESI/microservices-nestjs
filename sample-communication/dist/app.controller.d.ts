import { CreateUserEvent } from './dto/createUserEvent';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): void;
}
