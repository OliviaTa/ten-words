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

  private tmpUser = {
    id: '1',
    email: 'mralexrabota@gmail.com',
    password: '***',
    themes: ['1']
  };

  public getCurrentUser() {
    return this.tmpUser;
  }

  public update(params: { id: string, data: any }) {
    this.tmpUser.themes = params.data.themes;
    return this.tmpUser;
  }

}
