import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/userDto';
export interface IUser {
    fName: string;
    lName: string;
    email: string;
}
export declare class AppService {
    private readonly communicationClient;
    private readonly analyticClient;
    private readonly users;
    constructor(communicationClient: ClientProxy, analyticClient: ClientProxy);
    getHello(): string;
    createUser(data: CreateUserDto): CreateUserDto;
    getAnalytics(): import("rxjs").Observable<any>;
}
