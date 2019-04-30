import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userId: string;

  constructor(private oauthService: OAuthService) { }

  ngOnInit() {
    this.oauthService.tryLogin().then(o => {
      this.userId = this.oauthService.getIdentityClaims()['oid'];
    });
  }

  logout() {
    this.oauthService.logOut();
  }

}
