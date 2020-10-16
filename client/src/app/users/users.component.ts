import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../@vex/services/auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn$) {
      this.router.navigate(['']);
    }
    this.createUserForm();
    this.getUserInfo()
  }

  createUserForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required, Validators.min(3)]],
      last_name: ['', [Validators.min(3)]],
      phone: [null, [Validators.min(8)]]
    });
  }

  getUserInfo() {
    this.userService.getProfile().subscribe(res => {
      this.userForm.patchValue(res);
    },err => {
      console.log(err);
      
    });
  }

  updateUser() {
    if(this.userForm.valid) {
      this.userService.updateProfile(this.userForm.getRawValue().subscribe(res => {
        this.router.navigate(['']);
      }))
    } else {
      this.userForm.markAsTouched()
    }
    
  }

}
