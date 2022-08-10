import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChaveComponent } from './form-chave.component';

describe('FormChaveComponent', () => {
  let component: FormChaveComponent;
  let fixture: ComponentFixture<FormChaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
