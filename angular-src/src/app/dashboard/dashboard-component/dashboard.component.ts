import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('childModal') public childModal: ModalDirective;

  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }


}
