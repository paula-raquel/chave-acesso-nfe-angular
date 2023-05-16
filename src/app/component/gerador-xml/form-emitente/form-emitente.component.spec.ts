import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEmitenteComponent } from './form-emitente.component';

describe('FormEmitenteComponent', () => {
  let component: FormEmitenteComponent;
  let fixture: ComponentFixture<FormEmitenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEmitenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEmitenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
