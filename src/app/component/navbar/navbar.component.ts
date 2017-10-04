import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService: AuthService,
              private _router: Router,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogout() {
    this._authService.logout();
    this._flashMessagesService.show('Logged out!', {cssClass: 'alert-success', timeout: 2000});
    this._router.navigate(['/']);
  }
}
