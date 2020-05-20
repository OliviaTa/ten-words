import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  public onSubmit() {
    if (this.form.valid){
      this.authService.signIn(this.form.value).subscribe({
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
