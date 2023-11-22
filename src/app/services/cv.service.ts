import { Injectable } from '@angular/core';
import { Personne } from '../cv/model/personne';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private readonly API_URL = 'https://apilb.tridevs.net/api/personnes/';
  get cvs$(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.API_URL);
  }
  deleteCv$(id: number) {
    return this.httpClient.delete(`${this.API_URL}${id}`);
  }
  deletedCv$: Observable<number> = new Observable<number>();

  constructor(private readonly httpClient: HttpClient) {}
}
