import { TestBed, inject } from '@angular/core/testing';

import { SongRetrievalService } from './song-retrieval.service';

describe('SongRetrievalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SongRetrievalService]
    });
  });

  it('should be created', inject([SongRetrievalService], (service: SongRetrievalService) => {
    expect(service).toBeTruthy();
  }));
});
