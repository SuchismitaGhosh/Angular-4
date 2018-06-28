import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fruit2Component } from './fruit2.component';

describe('Fruit2Component', () => {
  let component: Fruit2Component;
  let fixture: ComponentFixture<Fruit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fruit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fruit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
