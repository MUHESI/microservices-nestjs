export interface IUser {
    fName: string;
    lName: string;
    email: string;
}
export declare class AppService {
    private readonly users;
    getHello(): string;
    handleUserCreated(data: any): void;
}
