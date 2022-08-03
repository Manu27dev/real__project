import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class GetProductService {
  products$: BehaviorSubject<Product[] | null> = new BehaviorSubject<
    Product[] | null
  >(null);

  constructor(private http: HttpClient) {
    this.http
      .get<Product[]>('http://localhost:3000/products')
      .subscribe((res) => this.products$.next(res));
  }
}
