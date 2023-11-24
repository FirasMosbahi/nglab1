import {Component, Input, OnInit} from '@angular/core';
import { ROUTES } from '../router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit{
  constructor(private readonly authService: AuthService) {}
  logout() {
    this.authService.logout();
  }
  routes = ROUTES;
  userId : string | null = null;
  ngOnInit() {
    console.log('hello')
    this.authService.authData.subscribe((value) => {
      console.log('value', value);
        this.userId = value
    });
  }
}
