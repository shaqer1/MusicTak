import { Injectable } from '@angular/core';
import { Song } from './Song';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SongRetrievalService {

  songCol: AngularFirestoreCollection<Song>;
  songs: any;
  songDoc: AngularFirestoreDocument<Song>;
  song: Observable<Song>;

  addSong(s: Song) {
    //TODO: check if empty strings.
    //if(!c.comment || !c.username){
    //  return;
    //}
    console.log('sending song chat!!!');
    this.afs.collection('songs')
      .add({'name': s.songName, 'spotifyID':s.sID,'itunesLink':s.iLink,'youtubeLink':s.yLink,'spotifyLink':s.sLink,'imageURL':s.imageURL, 'songId':s.songId});
  }

  getSong(id: string) : Observable<Song> {
    console.log(id);
    /*this.songCol = this.afs.collection('songs');
    this.songs = this.songCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Song;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });*/
    this.songDoc = this.afs.collection('songs').doc(id);
    this.song = this.songDoc.valueChanges();
    console.log(this.song);
    return this.song;

  }

  constructor(private afs: AngularFirestore) { }

}
