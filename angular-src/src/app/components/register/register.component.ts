import { Component, OnInit } from '@angular/core';
import {ValidateService} from "../../services/validate.service";

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
    private validateService: ValidateService
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
      console.log("pls fill all fields");
      return false;
    }

// Validate email
    if(!this.validateService.validateEmail(user.email)){
      console.log("pls enter valid email");
      return false;
    }

  }

}
