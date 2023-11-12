import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { ColorsInputComponent } from './colors-input/colors-input.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './cv/person-details/person-details.component';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';

const APP_ROUTES: Routes = [
  { path: 'cv', component: CvComponent },
  { path: 'colors-input', component: ColorsInputComponent },
  { path: 'mini-word', component: MiniWordComponent },
  { path: 'cv-details/:id', component: PersonDetailsComponent },
  { path: 'authentification-form', component: AuthentificationFormComponent },
  { path: 'login', component: AuthentificationFormComponent },
  { path: '', component: HomeComponent },
];

export const ROUTES = {
  cv: 'cv',
  colorsInput: 'colors-input',
  miniWord: 'mini-word',
  home: '',
  cvDetails: 'cv-details',
  authForm: 'authentification-form',
  login: 'login',
};

export const ROUTING = RouterModule.forRoot(APP_ROUTES);
