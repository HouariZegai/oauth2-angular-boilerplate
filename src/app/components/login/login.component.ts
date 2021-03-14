import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {UserAuthService} from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameFormControl: FormControl;
  passFormControl: FormControl;

  constructor(private router: Router, private toastr: ToastrService, private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.usernameFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ])
    this.passFormControl = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])

    // For testing purpose only
    this.usernameFormControl.setValue("admin")
    this.passFormControl.setValue("password")
  }

  onLogin() {
    const username: string = this.usernameFormControl.value;
    const password: string = this.passFormControl.value;

    this.userAuthService.login({username, password}).subscribe(
        data => {
          this.toastr.success('You have sign in.', 'Congrats!', {timeOut: 3000});
          this.router.navigate(['/']);
        }, error => {
          console.log(error)
          this.toastr.error('Username and/or password are incorrect!', 'Failed!', {timeOut: 3000});
        }
    );
  }

}
