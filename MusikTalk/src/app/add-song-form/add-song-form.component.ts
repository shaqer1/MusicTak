import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';

import { Song } from '../Song';

@Component({
  selector: 'app-add-song-form',
  templateUrl: './add-song-form.component.html',
  styleUrls: ['./add-song-form.component.css']
})
export class AddSongFormComponent implements OnInit {
  model = new Song("", "");

  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    // Create unique id
    let docid = this.model.name.replace(/\ /g, '_') + '_' + this.model.artist.replace(/\ /g, '_');
    docid = docid.toLowerCase();
    console.log(docid);

    // Create the object
    let songObj = {
      'name': this.model.name,
      'artist': this.model.artist,
      'songID': docid,
      'itunesLink': '',
      'spotifyLink': '',
      'youtubeLink': ''
    }
    if (this.model.itunesLink)
      songObj['itunesLink'] = this.model.itunesLink;
    if (this.model.spotifyLink)
      songObj['spotifyLink'] = this.model.spotifyLink;
    if (this.model.youtubeLink)
      songObj['youtubeLink'] = this.model.youtubeLink;

    // Send the doc
    this.afs.collection('songs').doc(docid).set(songObj);

    // Go to new comment section
    this.router.navigate(['song', docid]);
  }

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  ngOnInit() { }

}
