import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import icClose from '@iconify/icons-ic/twotone-close';
import icBack from '@iconify/icons-ic/round-arrow-back-ios';
import icShow from '@iconify/icons-ic/round-visibility';
import icHide from '@iconify/icons-ic/round-visibility-off';

import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { stagger20ms } from '../../animations/stagger.animation';
import { fadeInUp400ms } from '../../animations/fade-in-up.animation';

@Component({
  selector: 'vex-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [
    fadeInUp400ms,
    stagger20ms
  ]
})
export class AuthenticationComponent implements OnInit {
  icClose = icClose;
  icBack = icBack;
  icShow = icShow;
  icHide = icHide;
  loginForm: FormGroup;
  registerForm: FormGroup;
  forgotPassowrdForm: FormGroup;
  viewType = 0;
  history: any = [];
  isLoading: boolean = false;
  emailExists: boolean = false;
  loginPassHide: boolean = true;
  regPassHide: boolean = true;
  login_message: String = "";
  register_message: String = "";

  constructor(private dialogRef: MatDialogRef<AuthenticationComponent>,
    private fb: FormBuilder,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) private data: any) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  ngOnInit(): void {
    this.forgotPassowrdForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  changeView(view) {
    this.history.push(this.viewType);
    this.viewType = view;
  }

  back() {
    if (this.history.length) {
      this.viewType = this.history[this.history.length - 1]
      this.history.pop()
    }
  }

  clearLoginInput(field) {
    this.loginForm.patchValue({ [field]: '' })
  }

  clearRegisterInput(field) {
    this.registerForm.patchValue({ [field]: '' })
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.min(6), Validators.max(40), Validators.required]]
    });
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required, Validators.min(6), Validators.max(40)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(6), Validators.max(40)]],
    });
  }

  login() {
    this.login_message = "";
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authService.login(this.loginForm.getRawValue()).subscribe((res: any) => {
        if (res['userInfo']) {
          this.authService.setUserInfo(res['userInfo']);
          localStorage.setItem('user', JSON.stringify(res['userInfo']));
          localStorage.setItem('isloggedIn', '1');
          localStorage.setItem('_A_tro_ee', res.token)
        }
        this.isLoading = false;
        this.authService.setLoggedIn(true);
        this.dialogRef.close({});
      }, err => {
        console.log(err instanceof HttpErrorResponse, err.status, err.error.message);

        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 404:
              this.login_message = err.error.message || "Email Not Found."
              break;
            default:
              break;
          }
        }
        console.log(err);
        this.isLoading = false;
      });
    }
  }

  register() {
    this.emailExists = false;
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.register(this.registerForm.getRawValue()).subscribe((res: any) => {
        if (res['userInfo']) {
          this.authService.setUserInfo(res['userInfo']);
          localStorage.setItem('user', JSON.stringify(res['userInfo']));
          localStorage.setItem('isloggedIn', '1');
          localStorage.setItem('_A_tro_ee', res.token)

        }
        this.authService.setLoggedIn(true);
        this.isLoading = false;
        this.dialogRef.close({});
      }, err => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 409:
              this.register_message = err.error.message || "Email Already exists."
              break;
            default:
              break;
          }
        }
        console.log(err);
        this.isLoading = false;
        this.emailExists = true;

      })
    }
  }
}
