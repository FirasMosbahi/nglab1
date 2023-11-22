import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorsInputComponent } from './colors-input/colors-input.component';
import { ColoredInputDirective } from './directives/colored-input.directive';
import { PersonListComponent } from './cv/person-list/person-list.component';
import { PersonListElementComponent } from './cv/person-list-element/person-list-element.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvDetailsComponent } from './cv/cv-details/cv-details.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvEmbauchComponent } from './cv/cv-embauch/cv-embauch.component';
import { SkillsPipe } from './pipes/skills.pipe';
import { ToastrModule } from 'ngx-toastr';
import { PersonDetailsComponent } from './cv/person-details/person-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTING } from './router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import { CookieModule, CookieService } from 'ngx-cookie';
import { CvCardFrontComponent } from './cv/cv-card-front/cv-card-front.component';
import { CvCardBackComponent } from './cv/cv-card-back/cv-card-back.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MiniWordComponent,
    ColorsInputComponent,
    ColoredInputDirective,
    PersonListElementComponent,
    DefaultImagePipe,
    PersonListComponent,
    CvDetailsComponent,
    CvComponent,
    CvEmbauchComponent,
    SkillsPipe,
    PersonDetailsComponent,
    HomeComponent,
    NavbarComponent,
    AuthentificationFormComponent,
    CvCardFrontComponent,
    CvCardBackComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
