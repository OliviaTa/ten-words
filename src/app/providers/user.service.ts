import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { provideRoutes } from '@angular/router';

interface User {
  email: string;
  themes: string[];
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public tmpUser = {
  //   id: '1',
  //   email: 'mralexrabota@gmail.com',
  //   password: '***',
  //   themes: ['1'],
  //   method: 'email',
  //   wordsAmount: 1
  // };

  public tmpUser;

  public getCurrentUser() {
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
