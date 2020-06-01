import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../providers/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private userService: UserService, private http: HttpClient) { }

  public getThemes() {
    const user = this.userService.user;
    return this.http.get<any[]>('http://localhost:3000/themes').pipe(
      map((themes) => {
        return themes.map((theme) => {
          return {
            ...theme,
            isActive: user.themes.includes(theme.id)
          };
        });
      })
    );
  }
}
