import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { provideRoutes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export interface User {
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

  public tmpUser: User;

  // public tmpUser;

  get user() {
    return this.tmpUser;
  }

  constructor(private http: HttpClient){}


  public update(params: { data: any }) {
    return this.http.put('http://localhost:3000/user', params.data).pipe(tap((user: User) => this.tmpUser = user));
  }

}
