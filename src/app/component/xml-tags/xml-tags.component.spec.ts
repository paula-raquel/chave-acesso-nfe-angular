import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmlTagsComponent } from './xml-tags.component';

describe('XmlTagsComponent', () => {
  let component: XmlTagsComponent;
  let fixture: ComponentFixture<XmlTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XmlTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XmlTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
