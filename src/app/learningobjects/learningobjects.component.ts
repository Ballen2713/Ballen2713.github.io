import { Component, OnInit } from '@angular/core';

import { LearningobjectService } from '../learningobjects/shared/learningobject.service';
@Component({
  selector: 'app-learningobjects',
  templateUrl: './learningobjects.component.html',
  styleUrls: ['./learningobjects.component.css'],
  providers: [LearningobjectService]
})
export class LearningobjectsComponent implements OnInit {

  constructor(private learningobjectService: LearningobjectService) { }

  ngOnInit() {
  }

}
