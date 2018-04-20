import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';


import { Song } from '../Song';
import { Tracks, Track, ITunesRequest } from '../Track';
import { SpotifyService } from '../spotify.service';
import { Comment } from '../Comment'




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

  cleanString(stri:string){
    var str = stri.replace(" ","_");
    str = str.replace("-","_");
    str = str.replace("\"","");
    str = str.replace("\'","");
    str = str.replace("\\","");
    str = str.replace("/","");
    str = str.replace("(","");
    str = str.replace(")","");
    str = str.replace("<","");
    str = str.replace(">","");
    str = str.replace(":","");
    str = str.replace(";","");
    return str;
  }

onSearch() {
  var x = (<HTMLInputElement>document.getElementById("name")).value;
  if(x != ""){
    this.spotifyService.login()
    .subscribe(() => {
      this.spotifyService.searchTracks(x)
      .subscribe(res => {
        this.tracks = res;
        console.log(this.tracks);
        this.tracksArray = res.tracks.items;
        console.log(this.tracksArray);
      })
    });
  }
}

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private spotifyService:SpotifyService
  ) { }

  ngOnInit() { }

  createChat(track:Track){
    // Create unique id
    var nm = track.name+" "+track.artists[0].name;
    while(nm.includes(" ")){
      nm = nm.replace(" ","+");
    }
    var itr:ITunesRequest;
    this.spotifyService.getITunesLink(nm)
      .subscribe(res =>{
        itr = res;
        var i;
        for(i = 0; i < itr.resultCount; i ++){
          if(track.album.name == itr.results[i].trackViewUrl){
            break;
          }
        }
        if(i == itr.resultCount){
          i = 0;
        }



        let docid = this.cleanString(track.name) + '_' + this.cleanString(track.artists[0].name);

        docid = docid.toLowerCase();
        console.log(docid);

        let song:Song = {
          name:track.name,
          artist:track.artists[0].name,
          itunesLink:itr.results[0].trackViewUrl,
          songID: docid,
          spotifyID: track.id,
          spotifyLink: track.album.external_urls.spotify,
          youtubeLink: 'https://www.youtube.com/results?search_query='+nm
        }
        this.afs.collection('songs').doc(docid).set(song);

        let initComment:Comment = {
            down_votes: 0,
            up_votes: 0,
            message: 'Chat Created',
            owner_name: 'UserID',
            post_time: (new Date()).getTime()
          }

          this.afs.collection('songs').doc(docid).collection('messages').doc(docid).set(initComment);
    //
    // // Go to new comment section
          this.router.navigate(['song', docid]);
        })
  }





}
