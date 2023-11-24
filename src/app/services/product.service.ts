import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../porducts/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly httpClient: HttpClient) {}

  getProducts(take: number, skip: number = 0): Observable<Product[]> {
    const API_URL = `https://dummyjson.com/products?skip=${skip}&limit=${take}`;
    return this.httpClient
      .get<{ products: Product[] }>(API_URL)
      .pipe(map((res) => res.products));
  }
}
