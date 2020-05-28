import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: [
    './sign-in.component.less',
    '../auth.component.less'
  ]
})
export class SignInComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.form.valid) {
      this.authService.signIn(this.form.value).subscribe({
        next: (user) => {
          console.log(user);
          this.router.navigateByUrl('/profile');
        },
        error: (err) => {
          console.log(err);

        }
      });
    }
  }
}
