import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { AuthComponent, AuthRegisterComponent } from '../auth/auth.component';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(public dialog: MdDialog, public authService: AuthorizationService) {
    this.checkUser();
  }

  checkUser(){
    if (this.authService.isLoggedIn()) {
        var currentUser = JSON.parse(localStorage.getItem('user'));
        this.username = currentUser.username;
    }
  }

  ngOnInit() {
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  openLoginDialog() {
    this.dialog.open(AuthComponent);
    this.checkUser();
  }
   
  openSignupDialog() {
    this.dialog.open(AuthRegisterComponent);
    this.checkUser();
  }

  logout() {
    this.authService.logout();
  }
}
