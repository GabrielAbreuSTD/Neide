import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugestoesListarPage } from './sugestoes-listar.page';

describe('SugestoesListarPage', () => {
  let component: SugestoesListarPage;
  let fixture: ComponentFixture<SugestoesListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugestoesListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugestoesListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
