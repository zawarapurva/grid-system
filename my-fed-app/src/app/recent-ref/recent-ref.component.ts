import { Component, OnInit } from '@angular/core';
import { RecentRefService } from '../services/recent-ref.service';

@Component({
  selector: 'app-recent-ref',
  templateUrl: './recent-ref.component.html',
  styleUrls: ['./recent-ref.component.scss']
})
export class RecentRefComponent implements OnInit {
  recentReftab;
  constructor(
    private recentRef: RecentRefService
  ) { }

  ngOnInit() {
    this.recentRef.getRecentRef().subscribe(res => {
      this.recentReftab = res;
      console.log(res);
    });
  }

}
