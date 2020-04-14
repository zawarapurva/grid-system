import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourTeamService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getTeamDeatils() {
    return this.httpClient.get('assets/yourTeams.json');
  }
}
