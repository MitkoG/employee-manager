import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeHomePayComponent } from './take-home-pay.component';

describe('TakeHomePayComponent', () => {
  let component: TakeHomePayComponent;
  let fixture: ComponentFixture<TakeHomePayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeHomePayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeHomePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
