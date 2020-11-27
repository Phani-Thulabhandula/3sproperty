import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: any = {};
    private _isLoggedInSUbject = new BehaviorSubject<boolean>(false);
    private _userSubject = new BehaviorSubject<boolean>(false);
    userInfo$ = this._userSubject.asObservable();
    isLoggedIn$ = this._isLoggedInSUbject.asObservable();
    userInfo: any = {
        name: "",
        email: "",
        id: ""
    }
    token = "";
    header: HttpHeaders = new HttpHeaders()

    constructor(private http: HttpClient) {
        try {
            let user = localStorage.getItem('user');
            let isLoggedIn = localStorage.getItem('isloggedIn');
            if (isLoggedIn == '1') {
                this.setLoggedIn(true)
            }
            if (user) {
                this.userInfo = JSON.parse(user);
            };
            this.token = localStorage.getItem("_A_tro_ee");
            this.header = this.header.set('Authorization', 'Bearer ' + this.token)
        } catch (error) {
            console.log(error);

        }

    }

    setUserInfo(data) {
        this.userInfo = data;
        this._userSubject.next(data);
    }

    setLoggedIn(value: boolean) {
        this._isLoggedInSUbject.next(value)
    }

    login(data) {
        return this.http.post('/users/login', data)
    }

    register(data) {
        return this.http.post('/users/register', data)
    }

    logout() {
        this._isLoggedInSUbject.next(false);
        localStorage.clear();
        return this.http.get('/logout');
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

    markAllReadNotification(data) {
        return this.http.post('/notifications/mark-as-read', data, { headers: this.header });
    }
}