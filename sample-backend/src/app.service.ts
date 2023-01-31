import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';
import { CreateUserDto } from './dto/createUserDto';
import { EmitPattern, NamesService } from './mc-config/config';

export interface IUser {
  fName: string;
  lName: string;
  email: string;
}

@Injectable()
export class AppService {
  private readonly users: IUser[] = [];
  constructor(
    @Inject(NamesService.COMMUNICATION)
    private readonly communicationClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(data: CreateUserDto) {
    this.users.push(data);
    this.communicationClient.emit(
      EmitPattern.userCreated,
      new CreateUserEvent(data),
    );
    return data;
  }
}