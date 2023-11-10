import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class LayoutService {


  private titleSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setTitle(title: string): void {
    this.titleSubject.next(title);
  }

  getTitle(): Observable<string> {
    return this.titleSubject.asObservable();
  }

  showLoader() {
    this.isLoading.next(true);
  }

  hideLoader() {
    this.isLoading.next(false);
  }

  getLoadingStatus() {
    return this.isLoading.asObservable();
  }
}
