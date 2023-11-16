import { TestBed } from '@angular/core/testing';

import { NgFlexiFrocksService } from './ng-flexi-frocks.service';

describe('NgFlexiFrocksService', () => {
  let service: NgFlexiFrocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFlexiFrocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
