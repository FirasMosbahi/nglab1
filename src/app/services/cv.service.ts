import { Injectable } from '@angular/core';
import { Personne } from '../cv/model/personne';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { personnesMock } from './personne.mock';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private readonly API_URL = 'https://apilb.tridevs.net/api/personnes/';
  personnes: Personne[] = [];
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
    console.log(this.personnes);
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

  constructor(private readonly httpClient: HttpClient) {}
}
