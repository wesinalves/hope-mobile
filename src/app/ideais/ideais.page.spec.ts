import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaisPage } from './ideais.page';

describe('IdeaisPage', () => {
  let component: IdeaisPage;
  let fixture: ComponentFixture<IdeaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
