import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: any = {};
    constructor(private http: HttpClient) {}

    updateProfile(data) {
        return this.http.post('users/updateprofile', data)
    }

    getProfile() {
        return this.http.get('users/getprofile')
    }
}