import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmailData } from './footer/EmailData';

@Injectable({
  providedIn: 'root'
})
export class MyEmailServiceService {

  private apiUrl = 'http://localhost:8081/envoyer-email';

  constructor(private http: HttpClient) {}

  sendEmail(emailData:EmailData): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, emailData, { responseType: 'text' });
  }
}
