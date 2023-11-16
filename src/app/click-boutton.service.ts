import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickBouttonService {
  constructor() { }
  private svgNavClickSource = new Subject<void>();
  svgNavClick$ = this.svgNavClickSource.asObservable();

  sendSvgNavClick() {
    this.svgNavClickSource.next();
  }
}
