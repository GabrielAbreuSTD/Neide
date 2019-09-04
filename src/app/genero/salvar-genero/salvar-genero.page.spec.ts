import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarGeneroPage } from './salvar-genero.page';

describe('SalvarGeneroPage', () => {
  let component: SalvarGeneroPage;
  let fixture: ComponentFixture<SalvarGeneroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarGeneroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarGeneroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
