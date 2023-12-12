import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthentificationFormComponent } from './authentification-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthentificationFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: AuthentificationFormComponent,
      },
    ]),
  ],
})
export class LoginModule {}
