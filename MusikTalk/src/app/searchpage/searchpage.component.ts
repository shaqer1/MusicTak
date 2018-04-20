import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Song } from '../Song';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  searchKey: string;

  page = 1;
  itemsPerPage = 5;
  numSongs: number;

  songsCol: AngularFirestoreCollection<Song>;
  songs: Observable<Song[]>;

  constructor(
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    this.getSongs();
    this.songs.subscribe(result => {
      this.numSongs = result.length
    });
  }

  getSongs(): void {
    this.songsCol = this.afs.collection('songs');
    this.songs = this.songsCol.valueChanges();
  }
}
