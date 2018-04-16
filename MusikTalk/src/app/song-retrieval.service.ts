import { Injectable } from '@angular/core';
import { Song } from './Song';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SongRetrievalService {

  songColl: AngularFirestoreCollection<Song>;
  songs: Observable<Song[]>;

  addSong(s: Song) {
    //TODO: check if empty strings.
    //if(!c.comment || !c.username){
    //  return;
    //}
    console.log('sending song chat!!!');
    this.afs.collection('songs')
      .add({'name': s.name, 'spotifyID':s.spotifyID,'itunesLink':s.itunesLink,'youtubeLink':s.youtubeLink,'spotifyLink':s.spotifyLink, 'songId':s.songID});
  }

  getSongs(id:string) :Observable<Song> {
    console.log(id);
    this.songColl = this.afs.collection('songs'
    ,ref => ref.where('songID', '==', id));
    this.songs = this.songColl.valueChanges();
    console.log("HEllo");
    console.log(this.songs);
    console.log("Bye");
    return this.songs[0];

  }
  getSong(id:string) : Observable<Song> {
    console.log(id);
    var postDoc = this.afs.doc('songs/'+id);
    var post = postDoc.valueChanges();
    console.log(post);
    return null;

  }

  constructor(private afs: AngularFirestore) { }

}
