import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { values } from 'lodash';
import { ROUTES } from '../router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  authData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    !!localStorage.getItem('id'),
  );
  authentificate(credentials: { email: string; password: string }) {
    return this.httpClient
      .post<{ id: string; userId: number }>(
        'https://apilb.tridevs.net/api/Users/login',
        credentials,
      )
      .pipe(
        map((value) => {
          this.modifyLocalStorage(value.id, value.userId, credentials.email);
          return true;
        }),
        catchError((err) => {
          return of(false);
        }),
      );
  }
  modifyLocalStorage(id: string, userId: number, email: string) {
    localStorage.setItem('id', id);
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('email', email);
    this.authData.next(true);
  }
  logout(): void {
    localStorage.clear();
    this.authData.next(false);
  }
}
