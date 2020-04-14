import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecentRefService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getRecentRef() {
    return this.httpClient.get('assets/recentref.json');
  }
}
