import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  Subject,
  tap,
} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { personnesMock } from './personne.mock';

@Injectable()
export class CvService {
  private readonly API_URL = 'https://apilb.tridevs.net/api/personnes/';
  personnes: Personne[] = [];
  personnes$: Subject<Personne[]> = new Subject<Personne[]>();
  getPersonnes$(): Observable<Personne[]> {
    return this.httpClient
      .get<Personne[]>('https://apilb.tridevs.net/api/personnes')
      .pipe(
        map((personnes) => {
          this.personnes = personnes;
          return personnes;
        }),
        catchError(() => {
          this.personnes = personnesMock;
          return of(personnesMock);
        }),
      );
  }
  getPersonneById(id: number): Observable<Personne | null> {
    const searchedPersonne = this.personnes.find(
      (personne) => personne.id == id,
    );
    if (searchedPersonne != undefined) return of(searchedPersonne);
    else return of(null);
  }
  deleteCv$(id: number) {
    return this.httpClient.delete(`${this.API_URL}${id}`);
  }

  getPersonneByName(name: string): Observable<Personne[]> {
    if (name.length > 0) {
      const params = new HttpParams().set(
        'filter',
        JSON.stringify({ where: { name: { like: `%${name}%` } } }),
      );
      return this.httpClient.get<Personne[]>(this.API_URL, { params });
    } else {
      return of([]);
    }
  }
  addPersonne(personne: Personne) {
    return this.httpClient.post<Personne>(
      `https://apilb.tridevs.net/api/personnes?access_token=${localStorage.getItem(
        'id',
      )}`,
      {
        name: personne.name,
        firstname: personne.firstname,
        cin: personne.cin,
        job: personne.job,
        path: personne.path,
        age: personne.age,
      },
    );
  }
  deletePersonne(item: Personne) {
    this.personnes = this.personnes.filter((personne) => personne !== item);
    this.personnes$.next(this.personnes);
  }

  constructor(private readonly httpClient: HttpClient) {}
}
