import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrofunComponent } from './cadastrofun.component';

describe('CadastrofunComponent', () => {
  let component: CadastrofunComponent;
  let fixture: ComponentFixture<CadastrofunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrofunComponent]
    });
    fixture = TestBed.createComponent(CadastrofunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
