import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {FlashMessagesService} from "angular2-flash-messages";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor(private _flashMessagesService: FlashMessagesService,
              private _authService: AuthService,
              private _router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    const user = {
      name: formData.value.name,
      username: formData.value.username,
      email: formData.value.email,
      password: formData.value.password,
    };

    //register user
    this._authService.registerUser(user)
      .subscribe(data => {
        if (data.success) {
          this._flashMessagesService.show('Registered  ' + user.name, {cssClass: 'alert-success', timeout: 2000});
          this._router.navigate(['/login']);
        } else {
          this._flashMessagesService.show('Not registered ', {cssClass: 'alert-danger', timeout: 2000});
          this._router.navigate(['/register']);
        }
      });

    this.signupForm.reset();

  }

}
