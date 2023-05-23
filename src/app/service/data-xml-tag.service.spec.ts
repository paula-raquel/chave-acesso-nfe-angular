import { TestBed } from '@angular/core/testing';

import { DataXmlTagService } from './data-xml-tag.service';

describe('DataXmlTagService', () => {
  let service: DataXmlTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataXmlTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
