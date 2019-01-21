import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespCrencaPage } from './resp-crenca.page';

describe('RespCrencaPage', () => {
  let component: RespCrencaPage;
  let fixture: ComponentFixture<RespCrencaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespCrencaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespCrencaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
