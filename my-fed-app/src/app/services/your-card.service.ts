import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourCardService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getCardDeatils() {
    return this.httpClient.get('assets/yourCards.json');
  }
}
