import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    userInfo: any = {
        name: "",
        email: "",
        id: ""
    }
    token = "";
    header: HttpHeaders = new HttpHeaders()

    constructor(private http: HttpClient) {
        try {
            this.token = localStorage.getItem("_A_tro_ee");
            this.header = this.header.set('Authorization', 'Bearer ' + this.token)
        } catch (error) {
            console.log(error);

        }
    }

    getNotification() {
        return this.http.get('/notifications/get', { headers: this.header });
    }

    deleteNotification(data) {
        return this.http.post('/notifications/delete', data, { headers: this.header });
    };

    readNotification(data) {
        return this.http.post('/notifications/mark-as-read', data, { headers: this.header });
    }
}