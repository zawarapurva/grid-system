import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getCatalogueProducts() {
    return this.httpClient.get('assets/product.json');
  }
}
