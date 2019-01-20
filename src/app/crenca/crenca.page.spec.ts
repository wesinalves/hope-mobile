import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrencaPage } from './crenca.page';

describe('CrencaPage', () => {
  let component: CrencaPage;
  let fixture: ComponentFixture<CrencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrencaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
