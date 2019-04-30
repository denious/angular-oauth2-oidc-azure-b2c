import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userId: string;

  constructor(private route: ActivatedRoute, private oauthService: OAuthService) { }

  ngOnInit() {
    this.oauthService.tryLogin().then(o => {
      this.userId = this.oauthService.getIdentityClaims()['oid'];
    });

    this.route.params.subscribe(params => {
      // swallow
    });
  }

  logout() {
    this.oauthService.logOut();
  }

}
