import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crm-benjamin-janvier';
  constructor(private router: Router) {
    // console.log('Config router :', this.router.config);
  }
}
