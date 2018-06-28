import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruit1Component } from './fruit1.component';

describe('Fruit1Component', () => {
  let component: Fruit1Component;
  let fixture: ComponentFixture<Fruit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fruit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fruit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
