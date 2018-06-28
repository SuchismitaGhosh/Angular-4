import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeRemoteserviceComponent } from './consume-remoteservice.component';

describe('ConsumeRemoteserviceComponent', () => {
  let component: ConsumeRemoteserviceComponent;
  let fixture: ComponentFixture<ConsumeRemoteserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeRemoteserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeRemoteserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
