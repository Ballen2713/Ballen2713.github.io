import { TestBed, inject } from '@angular/core/testing';

import { LearningobjectService } from './learningobject.service';

describe('LearningobjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningobjectService]
    });
  });

  it('should be created', inject([LearningobjectService], (service: LearningobjectService) => {
    expect(service).toBeTruthy();
  }));
});
