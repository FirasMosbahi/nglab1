import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { ROUTES } from '../router';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.authData.pipe(
    tap((isLogged) => {
      if (!isLogged) router.navigate([ROUTES.home]);
    }),
  );
};
