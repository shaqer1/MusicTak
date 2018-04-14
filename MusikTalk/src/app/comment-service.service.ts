import { Injectable } from '@angular/core';
import { Comment } from './Comment';
import { Song } from './Song';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentServiceService {

  commentsCol: AngularFirestoreCollection<Comment>;
  comments: Observable<Comment[]>;

  sendComment(c: Comment, s: Song) {
    //TODO: check if empty strings.
    if(!c.comment || !c.username){
      return;
    }
    console.log('sending comment!!!');
    this.afs.collection('Comments')
      .add({'comment': c.comment, 'song':
      {'songName': c.song.songName, 'songId': c.song.songId}
      , 'username': c.username});
  }

  getComments(c: Comment): Observable<Comment[]> {
    this.commentsCol = this.afs.collection('Comments'
    ,ref => ref.where('song.songId', '==', c.song.songId));
    this.comments = this.commentsCol.valueChanges();
    console.log(this.comments);
    return this.comments;
  }

  constructor(private afs: AngularFirestore) { }

}
