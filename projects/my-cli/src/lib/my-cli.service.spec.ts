import { TestBed } from '@angular/core/testing';

import { MyCliService } from './my-cli.service';

describe('MyCliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyCliService = TestBed.get(MyCliService);
    expect(service).toBeTruthy();
  });
});
