import { IUser } from './app.service';

export class CreateUserEvent {
  constructor(public readonly data: IUser) {}
}
