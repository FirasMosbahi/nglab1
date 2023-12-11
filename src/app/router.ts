import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { ColorsInputComponent } from './colors-input/colors-input.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { HomeComponent } from './home/home.component';
import { PersonDetailsComponent } from './cv/person-details/person-details.component';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import { RxjsOpsComponent } from './rxjs-ops/rxjs-ops.component';
import { ProductsComponent } from './porducts/products.component';
import { cvDetailsResolver } from './resolvers/cv-details.resolver';
import { cvResolver } from './resolvers/cv.resolver';
import { CvMasterDetailsComponent } from './cv/cv-master-details/cv-master-details.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { loginGuard } from './guards/login.guard';
import { logoutGuard } from './guards/logout.guard';

export const APP_ROUTES: Routes = [
  { path: 'cv', component: CvComponent, resolve: { personnes: cvResolver } },
  { path: 'colors-input', component: ColorsInputComponent },
  { path: 'mini-word', component: MiniWordComponent },
  {
    path: 'cv-details/:id',
    component: PersonDetailsComponent,
    resolve: { personne: cvDetailsResolver },
  },
  { path: 'authentification-form', component: AuthentificationFormComponent },
  {
    path: 'login',
    component: AuthentificationFormComponent,
    canActivate: [logoutGuard],
  },
  { path: '', component: HomeComponent },
  { path: 'rxjs-ops', component: RxjsOpsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'add-cv', component: AddCvComponent },
  {
    path: 'list',
    component: CvMasterDetailsComponent,
    resolve: { personnes: cvResolver },
    children: [
      {
        path: ':id',
        component: PersonDetailsComponent,
        resolve: { personne: cvDetailsResolver },
      },
    ],
  },
];

export const ROUTES = {
  cv: 'cv',
  colorsInput: 'colors-input',
  miniWord: 'mini-word',
  home: '',
  cvDetails: 'cv-details',
  authForm: 'authentification-form',
  login: 'login',
  rxjsOps: 'rxjs-ops',
  products: 'products',
  list: 'list',
  addCv: 'add-cv',
};
