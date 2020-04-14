import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgressInfoService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getProgressInfo() {
    return this.httpClient.get('assets/progressInfo.json');
  }
}
