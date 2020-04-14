import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  imgsrc;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('username') === 'Alexa' ) {
      this.imgsrc = 'https://i.ibb.co/QN6Cz6C/1.jpg';
    } else {
      this.imgsrc = 'https://i.ibb.co/TwrMTRt/2.jpg';
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
