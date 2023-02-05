import { TestBed } from '@angular/core/testing';

import { ChatgptapiserviceService } from './chatgptapiservice.service';

describe('ChatgptapiserviceService', () => {
  let service: ChatgptapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatgptapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
