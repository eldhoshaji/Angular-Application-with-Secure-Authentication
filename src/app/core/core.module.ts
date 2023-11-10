import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './backend/services/auth.service';
import { UsersService } from './backend/services/users.service';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { UsersApi } from './backend/api/users.api';
import { AuthApi } from './backend/api/auth.api';
import { HttpService } from './backend/http.service';

const API = [AuthApi, UsersApi];
const SERVICES = [HttpService, AuthService, UsersService];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...SERVICES,
        ...API,
      ],
    };
  }
}
