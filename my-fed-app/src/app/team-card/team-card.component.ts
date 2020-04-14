import { Component, OnInit } from '@angular/core';
import { YourTeamService } from '../services/your-team.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  yourTeamDetails;
   constructor(
     private teamCard: YourTeamService
   ) { }

   ngOnInit() {
     this.teamCard.getTeamDeatils().subscribe(res => {
       this.yourTeamDetails = res;
       console.log(res);
     });
   }
}
