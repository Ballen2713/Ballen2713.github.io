import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { LearningobjectComponent } from './learningobjects/learningobject/learningobject.component';
import { LearningobjectListComponent } from './learningobjects/learningobject-list/learningobject-list.component';
import { LearningobjectsComponent } from './learningobjects/learningobjects.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
/*Ng Module is the skeleton and backbone of entire app function main place to define pipes, componenets and 
other modules*/

@NgModule({
  declarations: [
    AppComponent,
    LearningobjectComponent,
    LearningobjectListComponent,
    LearningobjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
