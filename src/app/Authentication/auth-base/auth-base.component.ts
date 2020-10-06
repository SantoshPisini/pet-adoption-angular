import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

enum AuthWidget {
  Login,
  Register,
  ForgotPassword
}

@Component({
  selector: 'app-auth-base',
  templateUrl: './auth-base.component.html',
  styleUrls: ['./auth-base.component.css']
})
export class AuthBaseComponent implements OnInit {

  authWidget: AuthWidget = null;
  constructor(private router: Router) {
    this.authWidget = AuthWidget.Register
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.SetUpAuthWidgetFromUrl();
      }
    });
  }

  ngOnInit() {
    
  }
  SetUpAuthWidgetFromUrl() {
    console.log(this.router.url);
    if (this.router.url.includes('register')) {
      this.authWidget = AuthWidget.Register;
    } else if (this.router.url.includes('forgotpassword')) {
      this.authWidget = AuthWidget.ForgotPassword;
    } else {
      this.authWidget = AuthWidget.Login;
    }
  }

}
