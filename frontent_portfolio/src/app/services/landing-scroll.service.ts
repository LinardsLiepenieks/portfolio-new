import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LandingScrollService {
  private scrollValue = new BehaviorSubject<number>(0);

  setScrollValue(value: number) {
    this.scrollValue.next(value);
  }

  getScrollValue() {
    return this.scrollValue.asObservable();
  }

  constructor() { }
}
