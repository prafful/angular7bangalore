import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeLocalService2Component } from './consume-local-service2.component';

describe('ConsumeLocalService2Component', () => {
  let component: ConsumeLocalService2Component;
  let fixture: ComponentFixture<ConsumeLocalService2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeLocalService2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeLocalService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
