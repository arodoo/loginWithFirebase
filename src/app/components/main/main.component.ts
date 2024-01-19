import { Component, OnInit } from '@angular/core';
import { AuthGoogleService } from '../../services/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private authGoogleService: AuthGoogleService,
    private router: Router
  ) { }

  user: any;

  ngOnInit() {
    this.user = this.authGoogleService.getProfile();
  }

  showData() {
    const data = JSON.stringify(this.authGoogleService.getProfile(), null, 2);
    console.log(data);
  }

  logOut() {
    this.authGoogleService.logout();
    this.router.navigate(['login']);
  }
}
