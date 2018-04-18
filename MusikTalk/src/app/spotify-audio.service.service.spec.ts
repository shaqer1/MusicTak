import { TestBed, inject } from '@angular/core/testing';

import { SpotifyAudio.ServiceService } from './spotify-audio.service.service';

describe('SpotifyAudio.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotifyAudio.ServiceService]
    });
  });

  it('should be created', inject([SpotifyAudio.ServiceService], (service: SpotifyAudio.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
