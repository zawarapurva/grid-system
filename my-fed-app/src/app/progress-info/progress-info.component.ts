import { Component, OnInit } from '@angular/core';
import { ProgressInfoService } from '../services/progress-info.service';

@Component({
  selector: 'app-progress-info',
  templateUrl: './progress-info.component.html',
  styleUrls: ['./progress-info.component.scss'],
})

export class ProgressInfoComponent implements OnInit {
  progressInfoCard;
  // progressChange = 0;
  constructor(
    private progressInfo: ProgressInfoService
  ) { }

  ngOnInit() {
    this.progressInfo.getProgressInfo().subscribe(res => {
      this.progressInfoCard = res;
      console.log(res);
    });
  }
}
