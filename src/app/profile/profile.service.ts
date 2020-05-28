import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from '../providers/user.service';

@Injectable()
export class ProfileService {

  constructor(private userService: UserService) { }

  readonly themes = ['Music', 'Movies', 'Techno', 'Business', 'Slang', 'Family', 'Idioms', 'Health', 'Art', 'Animals', 'Games', 'Basic']
    .map((x, i) => ({
      id: String(i + 1),
      name: x
    }));

  public getThemes() {
    const user = this.userService.user;
    return of(this.themes).pipe(
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
