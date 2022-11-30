import { TestBed } from '@angular/core/testing';

import { PlayerCartService } from './player-cart.service';

describe('PlayerCartService', () => {
  let service: PlayerCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
