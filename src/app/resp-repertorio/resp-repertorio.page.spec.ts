import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespRepertorioPage } from './resp-repertorio.page';

describe('RespRepertorioPage', () => {
  let component: RespRepertorioPage;
  let fixture: ComponentFixture<RespRepertorioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespRepertorioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespRepertorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
