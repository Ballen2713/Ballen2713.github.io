import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LearningobjectService } from '../shared/learningobject.service';
import { ToastrService } from 'ngx-toastr';
import { Learningobject } from '../shared/learningobjects.model';
@Component({
  selector: 'app-learningobject',
  templateUrl: './learningobject.component.html',
  styleUrls: ['./learningobject.component.css'],
  providers: [LearningobjectService]
})
export class LearningobjectComponent implements OnInit {
  constructor(private learningobjectService: LearningobjectService, private toastr: ToastrService) { }

  ngOnInit() {
    this.learningobjectService.getData(); // obtains the data being stored 
    this.resetForm();
  }
// Function that validates the submit button
  onSubmit(learningobjectForm: NgForm) {
    // tslint:disable-next-line:curly
    // Checks to see if the key is null
    if (learningobjectForm.value.$key == null)
        this.learningobjectService.insertLearningobject(learningobjectForm.value);// If the key is null then it inserts the value 
  // tslint:disable-next-line:curly
  else
  // Condition for when the object isn't null 
        this.learningobjectService.updateLearningobject(learningobjectForm.value);
      this.resetForm(learningobjectForm);
      this.toastr.success('Submitted Successfully!', 'Learning Objects');
  }
// Reset function to revert back to all parts of the forms fields are empty 
  resetForm(learningobjectForm?: NgForm) {
    if (learningobjectForm != null) {
      learningobjectForm.reset();
      this.learningobjectService.selectedLearningobject = {
        $key: null,
        name: '',
        level: ''
      };
    }
  }

}
