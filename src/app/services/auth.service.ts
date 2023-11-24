import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  authData: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    localStorage.getItem('id'),
  );
  authentificate(credentials: { email: string; password: string }) {
    this.httpClient.post(
      'https://apilb.tridevs.net/api/Users/login',
      credentials,
    );
  }
  addIdToLocalStorage(id: string) {
    localStorage.setItem('id', id);
    this.authData.next(id);
  }
  logout(): void {
    localStorage.clear();
    this.authData.next(null);
  }
}
