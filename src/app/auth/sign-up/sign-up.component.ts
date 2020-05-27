import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: [
    './sign-up.component.less',
    '../auth.component.less'
  ]
})
export class SignUpComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      nickname: [''],
      birthday: ['1995-09-16']
    });
  }

  public onSubmit() {

    if (this.form.valid) {
      this.authService.signUp(this.form.value).subscribe({
        next: (user) => {
          console.log(user);
          this.router.navigateByUrl('/first-config/choose-themes');
        },
        error: (err) => {
          console.log(err);

        }
      });
    }
  }
}
