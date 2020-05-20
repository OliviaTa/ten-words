import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

interface User{
  email: string;
}

const tmpUser = {
  email: 'mralexrabota@gmail.com',
  password: '***'
};

interface SignInParams {
  email: string;
  password: string;
}

@Injectable()
export class AuthService{

  public user;

  public signIn(params: SignInParams){
    if (params.email === tmpUser.email && params.password === tmpUser.password){
      const user = {...tmpUser};
      delete user.password;
      return of(user);
    }

    return throwError('User not found');
  }
}
