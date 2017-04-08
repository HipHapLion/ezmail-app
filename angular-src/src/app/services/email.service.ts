import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class EmailService {

  // private email: any;
  private currentAccount: any;

  constructor(
    private http: Http
  ) {
    this.currentAccount = 0;
   }

  setAccount(val){
    this.currentAccount = val;
  }

  getAccount(){
    return this.currentAccount;
  }

  sendEmail(email) {
    let headers = new Headers();
    headers.append('Content-Tpye', 'application/json');
    return this.http.post('http://localhost:3000/emails/send', email, { headers: headers }).map(res => res.json());
    // return this.http.post('/emails/send', email, { headers: headers }).map(res => res.json());
  }

  getEmails(account) {
    let headers = new Headers();
    headers.append('Content-Tpye', 'application/json');
    return this.http.post('http://localhost:3000/emails/list', account, { headers: headers }).map(res => res.json());
    // return this.http.post('/emails/list', account, { headers: headers }).map(res => res.json());
  }

  getContent(info) {
    let headers = new Headers();
    headers.append('Content-Tpye', 'application/json');
    return this.http.post('http://localhost:3000/emails/read', info, { headers: headers }).map(res => res.json());
    // return this.http.post('/emails/read', info, { headers: headers }).map(res => res.json());
  }

  deleteMail(info) {
    let headers = new Headers();
    headers.append('Content-Tpye', 'application/json');
    return this.http.post('http://localhost:3000/emails/delete', info, { headers: headers }).map(res => res.json());
    // return this.http.post('/emails/delete', info, { headers: headers }).map(res => res.json());
  }
}
