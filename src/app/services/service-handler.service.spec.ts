import { TestBed, inject } from '@angular/core/testing';
import { ServiceHandlerService } from './service-handler.service';

describe('ServiceHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceHandlerService]
    });
  });

  it('should ...', inject([ServiceHandlerService], (service: ServiceHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
