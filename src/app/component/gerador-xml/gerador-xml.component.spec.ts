import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorXmlComponent } from './gerador-xml.component';

describe('GeradorXmlComponent', () => {
  let component: GeradorXmlComponent;
  let fixture: ComponentFixture<GeradorXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeradorXmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeradorXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
