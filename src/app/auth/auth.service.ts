import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { UserService } from '../providers/user.service';

interface SignInParams {
  email: string;
  password: string;
}

interface SignUpParams {
  email: string;
  password: string;
  nickname?: string;
  birthday?: string;
}

@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }

  public signIn(params: SignInParams) {
    const tmpUser = this.userService.tmpUser;

    if (tmpUser && params.email === tmpUser.email && params.password === tmpUser.password) {
      const user = { ...tmpUser };
      delete user.password;
      return of(user);
    }

    return throwError('User not found');
  }

  public signUp(params: SignUpParams) {
    this.userService.tmpUser = {
      id: '2',
      email: params.email,
      password: params.password,
      nickname: params.nickname,
      birthday: params.birthday,
      themes: [],
      method: 'email',
      wordsAmount: 1
    };
    return of(this.userService.tmpUser);
  }
}
