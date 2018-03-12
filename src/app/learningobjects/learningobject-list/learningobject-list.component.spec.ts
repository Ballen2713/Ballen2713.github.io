import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningobjectListComponent } from './learningobject-list.component';

describe('LearningobjectListComponent', () => {
  let component: LearningobjectListComponent;
  let fixture: ComponentFixture<LearningobjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningobjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningobjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
