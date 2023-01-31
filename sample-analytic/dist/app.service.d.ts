import { CreateUserEvent } from './dto/createUserEvent';
export declare class AppService {
    private readonly analytics;
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): void;
}
