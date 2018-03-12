import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Learningobject } from './learningobjects.model';

@Injectable()
export class LearningobjectService {
  // Stores the learning input from the user into firebase
  learningobjectList: AngularFireList<any>;
  selectedLearningobject: Learningobject = new Learningobject();
  constructor(private firebase: AngularFireDatabase) { }
/*function that obtains the values after user input the the information into the text box
and uploads the information or values into the firebase database 
*/
  getData() {
    this.learningobjectList = this.firebase.list('learningobjects');
    return this.learningobjectList;
  }
// inserts the new data into the Fire list 
  insertLearningobject(learningobject: Learningobject) {
    this.learningobjectList.push({
      name: learningobject.name,
      level: learningobject.level
    });
  }
// Updates the users information for the learning Object list 
  updateLearningobject(learningobject: Learningobject) {
    this.learningobjectList.update(learningobject.$key,
      {
         name: learningobject.name,
        level: learningobject.level,
      });
  }

  // gives the user to delete after they have made the learning object
  deleteLearningObject($key: string) {
    this.learningobjectList.remove($key);
  }
}
