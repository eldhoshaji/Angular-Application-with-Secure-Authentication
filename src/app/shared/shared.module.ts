import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SubstringPipe } from './pipes/substring.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { LineClampDirective } from './directives/line-clamp.directive';
import { UtcToLocalPipe } from './pipes/utc-local.pipe';
import { ToastModule } from 'primeng/toast';
import { LayoutService } from './services/layout.service';
import { LoaderComponent } from './components/loader/loader.component';

const PRIMR_NG = [
  ButtonModule,
  CardModule,
  InputTextModule,
  PasswordModule,
  TableModule,
  TagModule,
  DialogModule,
  InputTextareaModule,
  InputNumberModule,
  DropdownModule,
  ChipsModule,
  ToastModule
]

const COMPONENTS = [
  MenuItemComponent,
  LoaderComponent
]

const PIPES = [
  SubstringPipe,
  TruncatePipe,
  UtcToLocalPipe
]

const DIRECTIVES = [
  LineClampDirective
]

const SERVICES = [
  LayoutService
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ...PRIMR_NG
  ],
  exports: [
    FontAwesomeModule,
    FormsModule,
    ...PRIMR_NG,
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  providers: [...SERVICES],
})
export class SharedModule { }
