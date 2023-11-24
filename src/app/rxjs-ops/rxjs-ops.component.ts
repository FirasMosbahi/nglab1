import { Component } from '@angular/core';
import { BehaviorSubject, map, merge, Observable, reduce, scan } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rxjs-ops',
  templateUrl: './rxjs-ops.component.html',
  styleUrls: ['./rxjs-ops.component.css'],
})
export class RxjsOpsComponent {
  inputOne = new FormControl(0);
  inputTwo = new FormControl(0);

  subjectOne$ = new BehaviorSubject(0);
  subjectTwo$ = new BehaviorSubject(0);

  mergedValue$ = new Observable<number>();
  scanValue$ = new Observable<number>();
  reduceValue$ = new Observable<number>();

  endFirstStream() {
    this.subjectOne$.complete();
  }
  endSecondStream() {
    this.subjectTwo$.complete();
  }

  constructor() {
    this.mergedValue$ = merge(this.subjectOne$, this.subjectTwo$).pipe(
      map((value) => value),
    );

    this.scanValue$ = this.mergedValue$.pipe(
      scan((acc, value) => {
        if (value) return acc + value;
        return acc;
      }),
    );

    this.reduceValue$ = this.mergedValue$.pipe(
      reduce((acc, value) => {
        if (value) return acc + value;
        return acc;
      }),
    );
  }

  changeStreamOneValue() {
    if (this.inputOne.value) this.subjectOne$.next(this.inputOne.value);
  }
  changeStreamTwoValue() {
    if (this.inputTwo.value) this.subjectTwo$.next(this.inputTwo.value);
  }
}
