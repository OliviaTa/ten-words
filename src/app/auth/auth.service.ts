import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { User, UserService } from '../providers/user.service';

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

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) { }

  public signIn(params: SignInParams) {

    return this.http.post('http://localhost:3000/sign-in', params).pipe(tap((user: User) => this.userService.tmpUser = user));

  }

  public signUp(params: SignUpParams) {

    return this.http.post('http://localhost:3000/sign-up', params).pipe(tap((user: User) => this.userService.tmpUser = user));

  }

  public signOut() {
    this.userService.tmpUser = null;
    this.router.navigateByUrl('/auth/sign-in');
  }
}
