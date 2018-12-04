import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeRemoteDataComponent } from './consume-remote-data.component';

describe('ConsumeRemoteDataComponent', () => {
  let component: ConsumeRemoteDataComponent;
  let fixture: ComponentFixture<ConsumeRemoteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeRemoteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeRemoteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
