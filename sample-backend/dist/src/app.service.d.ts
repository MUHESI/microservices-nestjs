import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/createUserDto';
export interface IUser {
    fName: string;
    lName: string;
    email: string;
}
export declare class AppService {
    private readonly communicationClient;
    private readonly users;
    constructor(communicationClient: ClientProxy);
    getHello(): string;
    createUser(data: CreateUserDto): CreateUserDto;
}
