import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyA_nU_3UBcDX7PV5oLzxoJuyggNoPPtjHA",
  authDomain: "musiktalk-6b659.firebaseapp.com",
  databaseURL: "https://musiktalk-6b659.firebaseio.com",
  projectId: "musiktalk-6b659",
  storageBucket: "musiktalk-6b659.appspot.com",
  messagingSenderId: "140711104501"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
