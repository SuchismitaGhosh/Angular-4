import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeLocalserviceComponent } from './consume-localservice.component';

describe('ConsumeLocalserviceComponent', () => {
  let component: ConsumeLocalserviceComponent;
  let fixture: ComponentFixture<ConsumeLocalserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeLocalserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeLocalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
