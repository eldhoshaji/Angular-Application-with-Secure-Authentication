import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/backend/services/auth.service';
import { UsersService } from 'src/app/core/backend/services/users.service';
import { UserStore } from 'src/app/core/store/user.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: any;
  password: any;
  errorMessage: any;


  constructor(
    private router: Router,
    private authService: AuthService,
    private userStore: UserStore,
    private usersService: UsersService,
  ) {}

  ngOnInit(): void {}

  onSave(){
    this.authService.login({email: this.email.trim(), password: this.password}).subscribe({
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

  navToRegister(){
    this.router.navigateByUrl('auth/register');
  }
}
