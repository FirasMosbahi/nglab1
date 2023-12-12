import { Component, ViewChild } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent {
  @ViewChild('formulaire') formulaire!: NgForm;
  constructor(
    private cvservice: CvService,
    private router: Router,
    private readonly toaster: ToastrService,
  ) {}

  createCv(item: NgForm) {
    console.log(item.value);
    this.cvservice
      .addPersonne({ id: 0, ...item.value })
      .pipe(
        tap((value) => {
          this.toaster.success(
            `personne with id ${value.id} created successfully`,
          );
          this.router.navigate(['cv']);
        }),
        catchError((err) => {
          this.toaster.error('an error occured while creating cv');
          return of(null);
        }),
      )
      .subscribe();
  }
  canDeactivate() {
    let empty = true;
    let values = Object.values(this.formulaire.value);

    for (const value of values) {
      if (value) {
        empty = false;
        break;
      }
    }
    if (!empty) {
      return window.confirm(
        'You have unsaved changes. Do you really want to leave?',
      );
    }
    return true;
  }
}
