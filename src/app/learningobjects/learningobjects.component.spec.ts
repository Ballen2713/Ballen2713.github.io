import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningobjectsComponent } from './learningobjects.component';

describe('LearningobjectsComponent', () => {
  let component: LearningobjectsComponent;
  let fixture: ComponentFixture<LearningobjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningobjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningobjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
