import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/backend/services/auth.service';
import { UsersService } from 'src/app/core/backend/services/users.service';
import { UserStore } from 'src/app/core/store/user.store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  studentId: any;
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  confirmPassword: any;
  errorMessage: any;
  section = 1;
  buttonLabel = 'NEXT';


  constructor(
    private router: Router,
    private authService: AuthService,
    private userStore: UserStore,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {}

  pageChange(section: number){
    if(section == 2) {
      if(this.firstName?.trim().length && this.lastName?.trim().length && this.email?.trim().length) {
        this.section = 2;
      } else {
        this.errorMessage = "All fields are mandatory";
      }
    } else {
      this.section = section;
      this.buttonLabel = "Next";
    }
  }

  onSave(){

    if(this.password == this.confirmPassword) {
      const cred = {
        first_name: this.firstName.trim(),
        last_name: this.lastName.trim(),
        email: this.email.trim(),
        password: this.password,
      }

      this.authService.signup(cred).subscribe({
        next: (response) => {
          this.login();
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      });
    } else {
      this.errorMessage = "Password does not match";
    }
  }

  getUserDetails(){
    this.usersService.getCurrentUser().subscribe(user => {
      this.userStore.saveUser(user);

      if(user.role_id == 3){
        this.router.navigateByUrl('home/dashboard');
      } else {
        this.router.navigateByUrl('admin-panel/dashboard');
      }
    })
  }

  navToLogin(){
    this.router.navigateByUrl('auth/login');
  }

  login(){
    this.authService.login({email: this.email, password: this.password}).subscribe({
      next: (response) => {
        this.errorMessage = null;
        this.userStore.saveUserToken(response)
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
      complete: () => {
        this.getUserDetails();
      }
    });
  }
}
