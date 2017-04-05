import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class EmailService {

  email: any;

  constructor(
    private http: Http
  ) { }

  sendEmail(email) {
    let headers = new Headers();
    headers.append('Content-Tpye', 'application/json');
    return this.http.post('http://localhost:3000/emails/send', email, { headers: headers }).map(res => res.json());
    // return this.http.post('/emails/send', email, {head  ers: headers}).map(res => res.json());
  }

  getEmails(){
    let headers = new Headers();
    headers.append('Content-Tpye', 'application/json');
    return this.http.post('http://localhost:3000/emails/list', { headers: headers }).map(res => res.json());
    // return this.http.post('/emails/list', {head  ers: headers}).map(res => res.json());
  }
}
