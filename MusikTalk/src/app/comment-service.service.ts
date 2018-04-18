import { Injectable } from '@angular/core';
import { Comment } from './Comment';
import { Song } from './Song';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { getLocaleDateTimeFormat } from '@angular/common';
import { FormatWidth } from '@angular/common';
import * as firebase from 'firebase';

@Injectable()
export class CommentServiceService {

  commentsCol: AngularFirestoreCollection<Comment>;
  comments: Observable<Comment[]>;
  formatwidth: FormatWidth;
  time: number;

  sendComment(c: Comment, username: string) {
    //TODO: check if empty strings.
    console.log(username);
    if(!c.message ){
      console.log('no data');
      return;
    }
    console.log('sending comment!!!');
    this.time = (new Date()).getTime();
    //this.afs.collection('songs').add({'comment': c.comment, 'song': {'songName': c.song.songName, 'songId': c.song.songId}, 'username': c.username});
    this.afs.collection('songs').doc('TVLn9lppXyus887n10Rv').collection('messages')
    .add({'message': c.message, 'owner_name': username, 'post_time': this.time, 'down_votes': 0, 'up_votes': 0});
  }

  getComments(id: string): Observable<Comment[]> {
    //console.log(id);
    this.commentsCol = this.afs.collection('songs').doc(id)
      .collection('messages', ref => ref.orderBy('post_time'));
    this.comments = this.commentsCol.valueChanges();
    console.log(this.comments);
    return this.comments;
  }

  constructor(private afs: AngularFirestore) { }

}
