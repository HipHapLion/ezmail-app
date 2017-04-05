import { Component, OnInit } from '@angular/core';
import {EmailService} from "../../services/email.service";

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {

  list: any;

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.emailService.getEmails().subscribe(data => {
      this.list = data;
      // console.log(this.list);
    });
  }

}
