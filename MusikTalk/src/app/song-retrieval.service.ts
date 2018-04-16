import { Injectable } from '@angular/core';
import { Song } from './Song';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SongRetrievalService {

  songColl: AngularFirestoreCollection<Song>;
  songs: Observable<Song[]>;


  constructor(private afs: AngularFirestore) { }

}
