import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfunComponent } from './editarfun.component';

describe('EditarfunComponent', () => {
  let component: EditarfunComponent;
  let fixture: ComponentFixture<EditarfunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarfunComponent]
    });
    fixture = TestBed.createComponent(EditarfunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
