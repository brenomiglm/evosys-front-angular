import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoFormComponent } from './departamento-form.component';

describe('DepartamentoFormComponent', () => {
  let component: DepartamentoFormComponent;
  let fixture: ComponentFixture<DepartamentoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartamentoFormComponent]
    });
    fixture = TestBed.createComponent(DepartamentoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
