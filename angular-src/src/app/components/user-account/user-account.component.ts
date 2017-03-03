import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'user-account.component.html',
  styleUrls: ['user-account.component.scss']
})
export class UserAccountComponent implements OnInit {

  user: Object;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
      err => {
        console.log(err);
        return false;
      }
    );
  }

}
