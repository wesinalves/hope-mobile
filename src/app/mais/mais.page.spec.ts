import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisPage } from './mais.page';

describe('MaisPage', () => {
  let component: MaisPage;
  let fixture: ComponentFixture<MaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
