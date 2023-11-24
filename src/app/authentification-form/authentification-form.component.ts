import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ROUTES } from '../router';

@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrls: ['./authentification-form.component.css'],
})
export class AuthentificationFormComponent implements OnInit {
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
              console.log(error);
              console.log(errorString);
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
  formErrors: string[] = [];
  ngOnInit(): void {
    this.formErrors$.subscribe(
      (value) => (this.formErrors = value),
      (error) => console.error('Error:', error),
      () => console.log('Completed!'),
    );
  }

  getInputClass = (input: any) =>
    (input?.invalid ?? true) && (input?.dirty ?? true)
      ? 'invalid border-danger form-control'
      : 'form-control';

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  get email() {
    return this.authForm.get('email');
  }
  get password() {
    return this.authForm.get('password');
  }

  async onSubmit() {
    if (this.authForm?.valid) {
      this.authService.authentificate(this.authForm?.value);
      await this.router.navigate([ROUTES.home]);
    }
  }
}
