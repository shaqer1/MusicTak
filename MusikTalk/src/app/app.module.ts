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
import { SpotifyService } from './spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyAudioService } from './spotify-audio.service.service';
import { HttpModule } from '@angular/http';

import { AddSongFormComponent } from './add-song-form/add-song-form.component'; // <-- NgModel lives here

import { UserProfileComponent } from './user-profile/user-profile.component';
import { SongSearchPipe } from './song-search.pipe';

import { CommentsCompComponent } from './comments-comp/comments-comp.component';
import { CommentServiceService } from './comment-service.service'

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { CoreModule } from './core/core.module';

import {AuthGuard} from './core/auth.guard';
import {NotifyService} from './core/notify.service';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    SongLinksComponent,
    CommentsCompComponent,
    UserProfileComponent,
    LoginCompComponent,
    SongSearchPipe,
    AddSongFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule, AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CommentServiceService,
    SongRetrievalService,
    SpotifyService,
    SpotifyAudioService,
    NotifyService,
    AuthGuard,
    SongSearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
