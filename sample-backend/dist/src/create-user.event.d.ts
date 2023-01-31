import { IUser } from './app.service';
export declare class CreateUserEvent {
    readonly data: IUser;
    constructor(data: IUser);
}
