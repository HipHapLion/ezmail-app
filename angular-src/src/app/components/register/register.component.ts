import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";
import {FlashMessagesService} from "angular2-flash-messages"; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: String;
  password: String;
  email: String;
  username: String;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }

// Required fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show("pls fill all fields", {cssClass: "alert-danger", timeout: 3000});
      return false;
    }

// Validate email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show("pls enter valid email", {cssClass: "alert-danger", timeout: 3000});
      return false;
    }

  }

}
