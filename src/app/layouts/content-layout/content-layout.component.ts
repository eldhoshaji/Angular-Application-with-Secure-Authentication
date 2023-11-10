import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserStore } from 'src/app/core/store/user.store';
import { faHome, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/core/backend/services/users.service';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
  providers: [LayoutService]
})
export class ContentLayoutComponent {

  items: any = [];
  faSignOut = faSignOut;
  routerSub = Subscription.EMPTY;
  currentRoute: string = '';
  headerTitle: string = '';

  constructor(
    public userStore: UserStore,
    private router: Router,
    private usersService: UsersService,
    public layoutService: LayoutService,
    private cdRef: ChangeDetectorRef
  ) {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const pathElements = router.url.split('/');
        this.currentRoute = pathElements[pathElements.length - 1];
      }
    });
  }

  ngOnInit(): void {
    this.items = [
      {
        name: 'Dashboard',
        icon: faHome,
        route: 'dashboard',
        active: true,
      }
    ];

    if(!this.userStore.getUser()?.user_id) {
      this.getUserDetails();
    }

    this.layoutService.getTitle().subscribe((newTitle: string) => {
      this.headerTitle = newTitle;
      this.cdRef.detectChanges(); // Trigger change detection
    });
  }

  getUserDetails(){
    this.usersService.getCurrentUser().subscribe(user => {
      this.userStore.saveUser(user);
    })
  }

  logout() {
    this.userStore.clear();
    this.router.navigateByUrl('auth/login');
  }

  ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }
}
