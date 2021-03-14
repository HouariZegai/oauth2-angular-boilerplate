import { Component, OnInit } from '@angular/core';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {UserAuthService} from '../../services/user-auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isOpen: boolean = false;
  isUserLogin: boolean;

  ngOnInit(): void {
    this.isUserLogin = this.userAuthService.isUserLogin;
  }

  constructor(private toast: ToastrService, private userAuthService: UserAuthService, private router: Router) {
  }

  tglNavbar() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.userAuthService.isUserLogin = false
    this.toast.warning("See you later :'(", "Logout", {timeOut: 1500});
    this.router.navigate(['login']);
  }

}
