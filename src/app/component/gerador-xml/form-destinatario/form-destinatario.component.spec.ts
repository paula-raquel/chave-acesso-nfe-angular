import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDestinatarioComponent } from './form-destinatario.component';

describe('FormDestinatarioComponent', () => {
  let component: FormDestinatarioComponent;
  let fixture: ComponentFixture<FormDestinatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDestinatarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDestinatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
