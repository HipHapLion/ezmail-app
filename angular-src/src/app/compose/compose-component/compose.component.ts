import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { EmailService } from "../../services/email.service";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  account: String;
  reciever: String;
  subject: String;
  message: String;
  userInfo: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.message = undefined;
  }

  onSend() {
    this.flashMessage.show("Connecting to server...", { cssClass: "alert-info", timeout: 3000 });

    if (this.account == "") {
      this.account = undefined;
    }

    if (this.reciever == "") {
      this.reciever = undefined;
    }

    if (this.subject == "") {
      this.subject = undefined;
    }

    if (this.message == "") {
      this.message = undefined;
    }

    this.authService.getProfile().subscribe(profile => {
      let account = profile.user;
      this.userInfo = this.getAccountInfo(account.accountInfo, this.account);
      if (this.userInfo == undefined) {
        this.flashMessage.show("Add account first", { cssClass: "alert-danger", timeout: 3000 });
        this.router.navigate(['/dashboard']);
      } else {

        const email = {
          sender: this.userInfo.username,
          recpt: this.reciever,
          password: this.userInfo.password,
          sub: this.subject,
          message: this.message
        }

        if (!this.validateService.validateCompose(email)) {
          this.flashMessage.show("Please fill in all fields.", { cssClass: "alert-danger", timeout: 3000 });
          return false;
        }

        if (!this.validateService.validateEmail(email.sender) || !this.validateService.validateEmail(email.recpt)) {
          this.flashMessage.show("Please enter a valid email.", { cssClass: "alert-danger", timeout: 3000 });
          return false;
        }

        this.emailService.sendEmail(email).subscribe(data => {
          this.flashMessage.show("Sending email...", { cssClass: "alert-info", timeout: 2000 });
          if (data.success) {
            this.flashMessage.show(data.msg, { cssClass: "alert-success", timeout: 5000 });
            this.router.navigate(['/dashboard']);
          } else {
            this.flashMessage.show(data.error, { cssClass: "alert-danger", timeout: 3000 });
            this.router.navigate(['/dashboard']);
          }
          window.location.reload();
        });
      }
    });
  }

  getAccountInfo(account, email) {
    for (let i = 0; i < account.length; i++) {
      if (account[i].username == email) {
        return account[i];
      }
    }
  }
}
