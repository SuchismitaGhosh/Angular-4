import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeLocalservice2Component } from './consume-localservice2.component';

describe('ConsumeLocalservice2Component', () => {
  let component: ConsumeLocalservice2Component;
  let fixture: ComponentFixture<ConsumeLocalservice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeLocalservice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeLocalservice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
