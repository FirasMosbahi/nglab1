import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ROUTES } from '../router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css'],
})
export class AuthentificationFormComponent {
  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  formErrors$ = this.authForm.statusChanges.pipe(
    map((status) => {
      if (status === 'INVALID') {
        const err: any[] = [];
        Object.keys(this.authForm.controls).forEach((key) => {
          if (this.authForm.get(key)?.dirty) {
            for (let error in this.authForm.get(key)?.errors) {
              const errorString = this.authForm.get(key)?.getError(error);
              err.push(`${key} ${error} ${JSON.stringify(errorString)}`);
            }
          }
        });
        return err;
      } else {
        return [];
      }
    }),
  );

  getInputClass = (input: any) =>
    (input?.invalid ?? true) && (input?.dirty ?? true)
      ? 'invalid border-danger form-control'
      : 'form-control';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toaster: ToastrService,
  ) {}

  get email() {
    return this.authForm.get('email');
  }
  get password() {
    return this.authForm.get('password');
  }

  async onSubmit() {
    console.log('start submit');
    if (this.authForm?.valid) {
      console.log('valid form');
      this.authService
        .authentificate(this.authForm?.value)
        .pipe(
          tap((authenticated) => {
            if (authenticated) {
              this.toaster.success('you are logged in successfully');
              this.router.navigate([ROUTES.cv]);
            } else {
              this.toaster.error('login credentials are not valid');
            }
          }),
        )
        .subscribe();
    }
  }
}
