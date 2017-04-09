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

  private emails = [];
  private account: any;
  private content: any;
  private error: any;

  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.flashMessages.show("Getting your emails please wait...", { cssClass: "alert-info", timeout: 3000 });
    this.authService.getProfile().subscribe(profile => {
      let accList = profile.user.accountInfo;
      if (accList == undefined) {
        this.flashMessages.show("Add an account", { cssClass: "alert-danger", timeout: 3000 });
        this.router.navigate(['/dashboard']);
      } else {
        this.account = accList[this.emailService.loadAccount()];
        if (this.account == undefined) {
          // this.flashMessages.show("Add an account", { cssClass: "alert-danger", timeout: 3000 });
          this.router.navigate(['/dashboard']);
        } else {
          this.emailService.getEmails(this.account).subscribe(data => {
            if (data.success) {
              let emails = data.emailList.toString().split('=%$^');
              for (let i = 0; i < emails.length; i++) {
                let part = emails[i].split('/');
                let id = part[0].trim().split(' ');
                if (part[1] != undefined) {
                  this.emails.push({ id: id[0], sub: part[1].trim() });
                }
              }
              if (this.emails.length <= 1) {
                this.flashMessages.show("No emails were retrieved", { cssClass: "alert-danger", timeout: 3000 });
                this.router.navigate(['/dashboard']);
              }
            } else {
              this.flashMessages.show(data.error, { cssClass: "alert-danger", timeout: 3000 });
              this.router.navigate(['/dashboard']);
            }
          });
        }
      }
    });
  }

  onView(id) {
    this.content = null;
    this.error = null;

    let info = {
      username: this.account.username,
      password: this.account.password,
      id: id
    }
    this.emailService.getContent(info).subscribe(content => {
      if (content.success) {
        this.content = content.content;
      } else {
        this.error = content.error;
      }
    });
  }

  onDelete(id) {
    let info = {
      username: this.account.username,
      password: this.account.password,
      id: id
    }

    this.emailService.deleteMail(info).subscribe(msg => {
      if(msg.success){
        this.flashMessages.show(msg.msg, {cssClass: "alert-success", timeout:5000 });
      }else{
        this.flashMessages.show(msg.error, {cssClass: "alert-danger", timeout:5000 });
      }
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
