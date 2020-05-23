import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { UserService } from '../providers/user.service';

interface SignInParams {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }

  public signIn(params: SignInParams) {
    const tmpUser = this.userService.tmpUser;
    if (params.email === tmpUser.email && params.password === tmpUser.password) {
      const user = { ...tmpUser };
      delete user.password;
      return of(user);
    }

    return throwError('User not found');
  }
}
