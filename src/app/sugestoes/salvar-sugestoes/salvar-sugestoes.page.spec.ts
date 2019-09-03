import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarSugestoesPage } from './salvar-sugestoes.page';

describe('SalvarSugestoesPage', () => {
  let component: SalvarSugestoesPage;
  let fixture: ComponentFixture<SalvarSugestoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarSugestoesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarSugestoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
