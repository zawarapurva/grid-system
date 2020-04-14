import { Component, OnInit } from '@angular/core';
import { YourCardService } from '../services/your-card.service';
// import { fa-hourglass-half } from '@fortawesome/fontawesome-svg-core';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
  selector: 'app-your-card',
  templateUrl: './your-card.component.html',
  styleUrls: ['./your-card.component.scss']
})
export class YourCardComponent implements OnInit {
// fa-hourglass-half = fa-hourglass-half;
 yourCardDetails;
  constructor(
    private yourCard: YourCardService
  ) { }

  ngOnInit() {
    this.yourCard.getCardDeatils().subscribe(res => {
      this.yourCardDetails = res;
      console.log(res);
    });
  }

}
