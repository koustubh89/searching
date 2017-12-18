import { TestBed, inject } from '@angular/core/testing';

import { DbDataService } from './db-data.service';

describe('DbDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbDataService]
    });
  });

  it('should be created', inject([DbDataService], (service: DbDataService) => {
    expect(service).toBeTruthy();
  }));
});
