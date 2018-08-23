import { Component } from '@angular/core';

import PerfectScrollbar from 'perfect-scrollbar';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';



@Component({
  selector: 'sidebar',
  template: require('./sidebar.html'),
  styles: [require('./sidebar.scss')]
})

export class SidebarComponent {

  isCollapsed = true;
  menu = [{
      title: 'Home',
      'link': '/home',
  }];
  Router;
  isAdmin;
  isLoggedIn;
  currentUser = {};
  AuthService;

  static parameters = [AuthService, Router];

  constructor(private authService: AuthService, private router: Router) {
      this.AuthService = authService;

      this.Router = router;

      this.reset();

      this.AuthService.currentUserChanged.subscribe(user => {
          this.currentUser = user;
          this.reset();
      });

  }

  ngOnInit(){
    const ps = new PerfectScrollbar('#sidebar', {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  }

  reset() {
      this.AuthService.isLoggedIn().then(is => {
          this.isLoggedIn = is;
      });
      this.AuthService.isAdmin().then(is => {
          this.isAdmin = is;
      });
      this.AuthService.getCurrentUser().then(user => {
          this.currentUser = user;
      });
  }

  logout() {
      return this.AuthService.logout().then(() => {
          this.Router.navigateByUrl('/home');
          this.reset();
      });
  }

}
