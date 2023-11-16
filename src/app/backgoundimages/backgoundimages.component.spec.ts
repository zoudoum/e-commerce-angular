import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgoundimagesComponent } from './backgoundimages.component';

describe('BackgoundimagesComponent', () => {
  let component: BackgoundimagesComponent;
  let fixture: ComponentFixture<BackgoundimagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgoundimagesComponent]
    });
    fixture = TestBed.createComponent(BackgoundimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
