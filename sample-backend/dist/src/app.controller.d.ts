import { AppService } from './app.service';
import { CreateUserDto } from './dto/createUserDto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    createUser(Body: CreateUserDto): CreateUserDto;
}
