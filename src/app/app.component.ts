import { Router } from '@angular/router';
import { DataService } from './data/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-exchange-ui';

  constructor(private authService: DataService, private router: Router) {
  }
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  get username(): string {
    return this.authService.username;
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
    this.router.navigateByUrl('/login');

  }
}
