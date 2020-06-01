import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { UserService, User } from '../providers/user.service';
import { tap } from 'rxjs/operators';

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

  constructor(private userService: UserService, private http: HttpClient) { }

  public signIn(params: SignInParams) {

      return this.http.post('http://localhost:3000/sign-in', params).pipe(tap((user: User) => this.userService.tmpUser = user));

  }

  public signUp(params: SignUpParams) {

    return this.http.post('http://localhost:3000/sign-up', params).pipe(tap((user: User) => this.userService.tmpUser = user));

  }
}
