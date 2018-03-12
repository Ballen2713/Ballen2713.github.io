import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningobjectComponent } from './learningobject.component';

describe('LearningobjectComponent', () => {
  let component: LearningobjectComponent;
  let fixture: ComponentFixture<LearningobjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningobjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
