import { Component } from '@angular/core';
import { BehaviorSubject, concatMap, Observable, scan } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(private readonly productService: ProductService) {}
  disableButton = false;
  numberElements$ = new BehaviorSubject<number>(0);
  products$ = this.numberElements$.pipe(
    concatMap((skip) => this.productService.getProducts(12, skip)),
    scan((previous, res) => {
      return [...previous, ...res];
    }),
  );

  loading = true;

  ngOnInit() {}

  loadMore() {
    const nextPage = this.numberElements$.value + 12;
    if (nextPage <= 100) this.numberElements$.next(nextPage);
    else {
      this.numberElements$.complete();
      this.disableButton = true;
    }
  }
}
