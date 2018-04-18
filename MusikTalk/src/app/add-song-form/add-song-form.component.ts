import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';


import { Song } from '../Song';
import { Tracks, Track } from '../Track';
import { SpotifyService } from '../spotify.service';


@Component({
  selector: 'app-add-song-form',
  templateUrl: './add-song-form.component.html',
  styleUrls: ['./add-song-form.component.css']
})
export class AddSongFormComponent implements OnInit {
  @Output() itemClick: EventEmitter<Track> = new EventEmitter<Track>();
  model = {
    name:""
  };
  get diagnostic() { return JSON.stringify(this.model); }

  tracks:Tracks;
  tracksArray:Track[];


  onSubmit() {
    this.spotifyService.login()
    .subscribe(() => {
      this.spotifyService.searchTracks(this.model.name)
      .subscribe(res => {
        this.tracks = res;
        console.log(this.tracks);
        this.tracksArray = res.tracks.items;
        console.log(this.tracksArray);
      })
    });
    //
    // // Create unique id
    // let docid = this.model.name.replace(/\ /g, '_') + '_' + this.model.artist.replace(/\ /g, '_');
    // docid = docid.toLowerCase();
    // console.log(docid);
    //
    // // Create the object
    // let songObj = {
    //   'name': this.model.name,
    //   'artist': this.model.artist,
    //   'songID': docid,
    //   'itunesLink': '',
    //   'spotifyLink': '',
    //   'youtubeLink': ''
    // }
    // if (this.model.itunesLink)
    //   songObj['itunesLink'] = this.model.itunesLink;
    // if (this.model.spotifyLink)
    //   songObj['spotifyLink'] = this.model.spotifyLink;
    // if (this.model.youtubeLink)
    //   songObj['youtubeLink'] = this.model.youtubeLink;
    //
    // // Send the doc
    // this.afs.collection('songs').doc(docid).set(songObj);
    //
    // // Go to new comment section
    // this.router.navigate(['song', docid]);

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
    private router: Router,
    private spotifyService:SpotifyService
  ) { }

  ngOnInit() { }

  createChat(track:Track){
    // Create unique id
    let docid = track.name.replace(/\ /g, '_') + '_' + track.artists[0].name.replace(/\ /g, '_');
    docid = docid.toLowerCase();
    console.log(docid);

    let song:Song = {
      name:track.name,
      artist:track.artists[0].name,
      itunesLink:'https://www.itunes.com',
      songID: docid,
      spotifyID: track.id,
      spotifyLink: track.album.external_urls.spotify,
      youtubeLink: 'https://www.youtube.com/results?search_query='+docid.replace('_','+')
    }
    this.afs.collection('songs').doc(docid).set(song);
    //
    // // Go to new comment section
     this.router.navigate(['song', docid]);
  }

}
