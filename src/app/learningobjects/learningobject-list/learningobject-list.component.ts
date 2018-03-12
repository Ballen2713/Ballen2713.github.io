import { Component, OnInit } from '@angular/core';

import { LearningobjectService } from '../shared/learningobject.service';
import { Learningobject } from '../shared/learningobjects.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-learningobject-list',
  templateUrl: './learningobject-list.component.html',
  styleUrls: ['./learningobject-list.component.css']
})
export class LearningobjectListComponent implements OnInit {
  learningobjectList: Learningobject[];
  constructor(private learningobjectService: LearningobjectService, private toastr: ToastrService) { }

  ngOnInit() {
    // How they data is retrieved for it to be stored in var x which displays the list 
    var x = this.learningobjectService.getData();
    // How the learning object is displayed on the side 
    x.snapshotChanges().subscribe(item => {
      this.learningobjectList = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        // tslint:disable-next-line:quotemark
        y["$key"] = element.key;
        // inputs the gathered data into the learningobjectlist or array
        this.learningobjectList.push(y as Learningobject);
      });
    });
  }
// Function allows the user to edit any list item
// I couldn't get this function to work, so it doesn't respond if clicked
  onEdit(learningobject: Learningobject) {
    this.learningobjectService.selectedLearningobject = Object.assign({}, learningobject);
  }
// Gives the user an option to delete anything on the fire list
  onDelete(key: string) {
    // tslint:disable-next-line:triple-equals
    // browser pop-up message to alert and validate from the user before they delete selected object or string value 
    if (confirm('Are you sure to delete this record ?') == true) {
      this.learningobjectService.deleteLearningObject(key);
      // tslint:disable-next-line:quotemark
      this.toastr.warning("Deleted Successfully", "Learning Object");
    }
  }
}
