import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(private _authService: AuthService,
              private _router: Router) { }

  ngOnInit() {
    this._authService.getProfile()
      .subscribe(
        profile => {
        this.user = profile.user;
      },
        error => {
          console.log(error);
          return false;
        });
  };



}
