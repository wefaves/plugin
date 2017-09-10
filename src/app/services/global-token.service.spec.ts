import { TestBed, inject } from '@angular/core/testing';
import { GlobalTokenService } from './global-token.service';

describe('GlobalTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalTokenService]
    });
  });

  it('should ...', inject([GlobalTokenService], (service: GlobalTokenService) => {
    expect(service).toBeTruthy();
  }));
});
