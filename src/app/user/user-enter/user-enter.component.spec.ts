import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEnterComponent } from './user-enter.component';

describe('UserEnterComponent', () => {
  let component: UserEnterComponent;
  let fixture: ComponentFixture<UserEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
