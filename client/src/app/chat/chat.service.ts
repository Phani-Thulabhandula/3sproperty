import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  token: String = '';
  public socket;


  header: HttpHeaders = new HttpHeaders()
  drawerOpen = new BehaviorSubject<boolean>(false);
  drawerOpen$ = this.drawerOpen.asObservable();

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem("_A_tro_ee");
    this.header = this.header.set('Authorization', 'Bearer ' + this.token)
  }

  getChats() {
    return this.http.get('/post-messages/get-my-chats', { headers: this.header })
  }

  getChatMessages(chat_id) {
    return this.http.get('/post-messages/get-my-chats-messages/' + chat_id, { headers: this.header })
  }

  sendPostMessage(message) {
    return this.http.post('/post-messages/send-my-message', message, { headers: this.header });
  }
}
