import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: any = {};
    private _isLoggedInSUbject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedInSUbject.asObservable();
    userInfo: any = {
        first_name: "",
        email: "",
        id: ""
    }
    constructor(private http: HttpClient) {
        try {
            let user = localStorage.getItem('user');
            let isLoggedIn = localStorage.getItem('isloggedIn');
            if(isLoggedIn == '1') {
                this.setLoggedIn(true)
            }
            if (user) {
                this.userInfo = JSON.parse(user);
            }
        } catch (error) {
            console.log(error);
            
        }

    }

    setUserInfo(data) {
        this.userInfo = data;
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
        return this.http.get('/logout')
    }
}