import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  selected = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private loginservice: LoginService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/dashboard';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginservice.login().subscribe(res => {
        console.log(res);
        for ( let i = 0; i < 2; i++) {
          if (res[i].username === this.loginForm.value.username && res[i].password === this.loginForm.value.password) {
            if (this.selected === true) {
              localStorage.setItem('username', this.loginForm.value.username);
              localStorage.setItem('password', this.loginForm.value.password);
            }
            this.router.navigate([this.returnUrl]);
          }
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
            return alert('An unexpected error occured');
        }
      });
  }

  rememberMe(event) {
    if (event.target.checked === false) {
      event.target.checked = true;
      this.selected = false;
    } else {
      event.target.checked = false;
      this.selected = true;
    }
  }
}
