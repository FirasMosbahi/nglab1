import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvCardFrontComponent } from './cv-card-front/cv-card-front.component';
import { CvCardBackComponent } from './cv-card-back/cv-card-back.component';
import { AutocompleteSearchComponent } from './autocomplete-search/autocomplete-search.component';
import { CvMasterDetailsComponent } from './cv-master-details/cv-master-details.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { PersonListElementComponent } from './person-list-element/person-list-element.component';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { PersonListComponent } from './person-list/person-list.component';
import { CvDetailsComponent } from './cv-details/cv-details.component';
import { CvComponent } from './cv/cv.component';
import { CvEmbauchComponent } from './cv-embauch/cv-embauch.component';
import { SkillsPipe } from '../pipes/skills.pipe';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    CvCardFrontComponent,
    CvCardBackComponent,
    AutocompleteSearchComponent,
    CvMasterDetailsComponent,
    AddCvComponent,
    PersonListElementComponent,
    DefaultImagePipe,
    PersonListComponent,
    CvDetailsComponent,
    CvComponent,
    CvEmbauchComponent,
    SkillsPipe,
    PersonDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterOutlet,
  ],
  providers: [CvService, EmbaucheService],
})
export class CvModule {}
