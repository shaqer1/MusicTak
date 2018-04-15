import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SongdetailpageComponent } from './songdetailpage/songdetailpage.component';
import { AppRoutingModule } from './/app-routing.module';
import { MusicinfocomponentComponent } from './songdetailpage/musicinfocomponent/musicinfocomponent.component';
import { SpotifyWidgetComponent } from './songdetailpage/musicinfocomponent/spotify-widget/spotify-widget.component';
import { SongLinksComponent } from './songdetailpage/musicinfocomponent/song-links/song-links.component';
import { SongRetrievalService } from './song-retrieval.service';


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
    AppComponent,
    SearchpageComponent,
    SongdetailpageComponent,
    MusicinfocomponentComponent,
    SpotifyWidgetComponent,
    SongLinksComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule, AppRoutingModule  
  ],
  providers: [SongRetrievalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
