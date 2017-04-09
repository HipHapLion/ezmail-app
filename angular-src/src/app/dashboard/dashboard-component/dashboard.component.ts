import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('childModal') public childModal: ModalDirective;

  name: String;
  username: String;
  password: String;
  accounts: any;

  constructor(
    private router: Router,
    private flashMessages: FlashMessagesService,
    private authService: AuthService,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.accounts = profile.user.accountInfo;
    });
  }

  onSave() {
    this.hideChildModal();
    this.authService.getProfile().subscribe(profile => {
      let list = profile.user.accountInfo;
      list.push({
        name: this.name,
        username: this.username,
        password: this.password
      });
      let account = {
        username: profile.user.username,
        accounts: list
      }
      this.authService.addAccount(account).subscribe(res => {
        // console.log(res);
        if(res.success){
          this.flashMessages.show(res.msg, {cssClass: "alert-success", timeout: 3000});
        }else{
          this.flashMessages.show(res.msg, {cssClass: "alert-danger", timeout: 3000});
        }
        window.location.reload();
      });
    });
  }

  gotoMail(val) {
    this.emailService.storeAccount(val);
    this.router.navigate(['/mail-view']);
  }

  print(val){
    // console.log(val);
  }

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }


}
