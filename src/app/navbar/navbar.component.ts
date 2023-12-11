import { Component, Input, OnInit } from '@angular/core';
import { ROUTES } from '../router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private readonly authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
  id$ = this.authService.authData;
  routes = ROUTES;
}
