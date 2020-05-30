import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { provideRoutes } from '@angular/router';

interface User {
  id: string;
  email: string;
  password?: string;
  nickname?: string;
  birthday?: string;
  themes: string[];
  method: string;
  wordsAmount: number;

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public tmpUser: User = {
    id: '1',
    email: 'mralexrabota@gmail.com',
    password: '***',
    themes: [],
    method: 'email',
    wordsAmount: 1
  };

  // public tmpUser;

  get user() {
    return this.tmpUser;
  }

  public update(params: { data: any }) {
    this.tmpUser = {
      ...this.tmpUser,
      ...params.data
    };
    return of(this.tmpUser);
  }

}
