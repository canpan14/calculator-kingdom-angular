import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm = new Subject();
  credentials = <any>{};

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.signInForm
    .subscribe(credentials => {
        this.authService.signIn(credentials)
            .subscribe(
              response => this.router.navigate(["/home"]),
              err => console.log(err)
            )
    })
  }

  signIn(credentials) {
    this.signInForm.next(credentials)
  }

}
