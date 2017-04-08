import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailService } from "../../services/email.service";
import { AuthService } from "../../services/auth.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.scss']
})
export class MailViewComponent implements OnInit {


  @ViewChild('childModal') public childModal: ModalDirective;

  emails = [];
  account: any;
  content: any;
  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      let accList = profile.user.accountInfo;
      if (accList == undefined) {
        this.flashMessages.show("Add an account", { cssClass: "alert-danger", timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.account = accList[this.emailService.getAccount()];
        this.emailService.getEmails(this.account).subscribe(data => {
          let emails = data.toString().split('=%$^');

          for (let i = 0; i < emails.length; i++) {
            let part = emails[i].split('/');
            let id = part[0].trim().split(' ');
            this.emails.push({ id: id[0], sub: part[1] });
          }
        });
      }
    });
  }

  onView(id) {
    this.content = null;
    let info = {
      username: this.account.username,
      password: this.account.password,
      id: id
    }
    this.emailService.getContent(info).subscribe(content => {
      this.content = content;
    });
  }

  onDelete(id) {
    let info = {
      username: this.account.username,
      password: this.account.password,
      id: id
    }

    this.emailService.deleteMail(info).subscribe(msg => {
      console.log(msg);
      window.location.reload();
    });
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
