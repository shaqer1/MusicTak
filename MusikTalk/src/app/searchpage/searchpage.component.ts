import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Song } from '../Song';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchKey: string;
  //songs: Song[];

  songsCol: AngularFirestoreCollectoin<Song>;
  songs: Observable<Song[]>;


  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getSongs();
  }

  getSongs(): void {
    this.songsCol = this.afs.collection('songs');
    this.songs = this.songsCol.valueChanges();
  }

}
