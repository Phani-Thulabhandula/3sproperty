import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../@vex/services/auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import icUpload from '@iconify/icons-ic/round-cloud-upload';

@Component({
  selector: 'vex-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  icUpload = icUpload;
  isSubmitted: Boolean = false;
  userInfo = {
    id: "",
    avatar: ""
  };

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
    this.userInfo = this.authService.userInfo;
    this.createUserForm();
    this.getUserInfo()
  }

  ngOnDestroy(): void {
    console.log("afterDestor");

  }

  createUserForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      first_name: ['', [Validators.required, Validators.min(3)]],
      last_name: ['', [Validators.min(3)]],
      phone: [null, [Validators.min(8)]],
      avatar: [null]
    });
  }

  getUserInfo() {
    this.userService.getProfile().subscribe(res => {
      this.userForm.patchValue(res);
    }, err => {
      console.log(err);

    });
  }

  updateUser() {
    if (this.userForm.valid) {
      this.userService.updateProfile(this.userForm.getRawValue()).subscribe(res => {
        localStorage.removeItem('userInfo');
        localStorage.setItem('user', JSON.stringify({ ...this.userForm.getRawValue(), name: `${this.userForm.value.first_name} ${this.userForm.value.last_name}`, id: this.userInfo.id }));
        this.authService.setUserInfo({ ...this.userForm.getRawValue(), name: `${this.userForm.value.first_name} ${this.userForm.value.last_name}` });
        this.router.navigate(['']);
      })
    } else {
      this.userForm.markAsTouched();
    }
  }

  deleteImage() {
    if (this.userForm.value.avatar) {
      this.userService.removeImage(this.userForm.value.avatar).subscribe(re => {
        this.userForm.patchValue({ avatar: "" })
      });
    }

  }

  handleFileInput(files) {
    files.forEach(file => {
      let fd = new FormData();
      fd.append('image', file);
      this.userService.uploadPicture(fd).subscribe((res: any) => {
        this.userForm.patchValue({ avatar: res.filename });
      });
    })
  }

}
