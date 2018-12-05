import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAPIComponentComponent } from './users-apicomponent.component';

describe('UsersAPIComponentComponent', () => {
  let component: UsersAPIComponentComponent;
  let fixture: ComponentFixture<UsersAPIComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAPIComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAPIComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
