import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeLocalService1Component } from './consume-local-service1.component';

describe('ConsumeLocalService1Component', () => {
  let component: ConsumeLocalService1Component;
  let fixture: ComponentFixture<ConsumeLocalService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeLocalService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeLocalService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
