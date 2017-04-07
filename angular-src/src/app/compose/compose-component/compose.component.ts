import { Component, OnInit } from '@angular/core';
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { EmailService } from "../../services/email.service";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  account: String;
  reciever: String;
  ccEmail: String;
  important: Boolean;
  subject: String;
  message: String;

  constructor(
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.important = false;
  }

  onSend() {

    if(this.ccEmail == ""){
      this.ccEmail = undefined;
    }

    if(this.account == ""){
      this.account = undefined;
    }

    if(this.reciever == ""){
      this.reciever = undefined;
    }

    if(this.subject == ""){
      this.subject = undefined;
    }

    if(this.message == ""){
      this.message = undefined;
    }

    const email = {
      sender: this.account,
      recipient: this.reciever,
      CC: this.ccEmail,
      sub: this.subject,
      message: this.message,
      imp: this.important
    }

    if (!this.validateService.validateCompose(email)) {
      this.flashMessage.show("Please fill in all fields.", { cssClass: "alert-danger", timeout: 3000 });
      return false;
    }

    if (!this.validateService.validateEmail(email.sender) || !this.validateService.validateEmail(email.recipient) && email.CC == undefined) {
      this.flashMessage.show("Please enter a valid email.", { cssClass: "alert-danger", timeout: 3000 });
      return false;
    }
    
    if (this.ccEmail != undefined && !this.validateService.validateEmail(email.CC)) {
      this.flashMessage.show("Please enter a valid email.", { cssClass: "alert-danger", timeout: 3000 });
      return false;
    }

    this.emailService.sendEmail(email).subscribe(data => {
      console.log(data);
    });

  }

  onSave() {
    console.log("saved ;)");
  }

}
