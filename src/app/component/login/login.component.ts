import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor(private _authService: AuthService,
              private _router: Router,
              private _flashMessagesService: FlashMessagesService) {
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    const user = {
      username: formData.value.username,
      password: formData.value.password,
    };

    this._authService.authenticateUser(user)
      .subscribe(data => {
        console.log(data);

        if(data.success) {
          this._authService.storeUserData(data.token, data.user);
          this._flashMessagesService.show('Logged in ' + user.username, {cssClass: 'alert-success', timeout: 2000});
          this._router.navigate(['/dashboard']);
        } else {
          this._flashMessagesService.show(data.message, {cssClass: 'alert-danger', timeout: 2000});
          this._router.navigate(['/login']);
        };
      });

    this.signupForm.reset();
  }

}
