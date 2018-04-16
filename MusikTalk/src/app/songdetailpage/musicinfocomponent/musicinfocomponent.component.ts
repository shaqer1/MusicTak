import { Component, OnDestroy, Input } from '@angular/core';
import { Song } from '../../Song';
import { SongInfo } from '../../SongInfo';
import { SpotifyService } from '../../spotify.service';
import 'rxjs/Rx';
import { SpotifyAudioService } from '../../spotify-audio.service.service';
import { Subscription } from 'rxjs';
import { Album, Track } from '../../album-interface';


@Component({
  selector: 'app-musicinfocomponent',
  templateUrl: './musicinfocomponent.component.html',
  styleUrls: ['./musicinfocomponent.component.css']
})
export class MusicinfocomponentComponent implements OnDestroy {
  title = 'this is going to look so fucking cool Shafay!!!!';
  @Input() song:Song;
  songInfo: SongInfo = {
    songName:'Colors of the Wind',
    artist:'Disney',
    imageURL:'https://i.scdn.co/image/211350fe562cc85a07d26b5869559418b4a44e3f',
    releaseDate:Date.now(),
    albumName:'Pochahontas'
  };
  artist = 'Giovanni Allevi';
  albums: Album[];
  album: Album;
  track: Track;
  spotifyAudioSubscription: Subscription;


  constructor(  public spotifyAudio: SpotifyAudioService,
    public spotifyAPI: SpotifyService) {
      this.spotifyAPI.login()
      .subscribe(() => {
        this.searchAlbums(this.artist);
      });

    this.spotifyAudioSubscription = spotifyAudio.ended$.subscribe(() => this.album = null )
  }
  searchAlbums(author: string) {
    this.spotifyAPI.searchAlbums(author)
      .subscribe(res => this.albums = res.albums.items)
  }

  playAlbum(nextAlbum: Album) {
    this.spotifyAPI.loadAlbum(nextAlbum.id)
      .subscribe(album => {
        this.album = album;
        this.playTrack(album.tracks.items[0])
      })
  }

  playTrack(track: Track) {
    if (this.track && this.track.id === track.id) { return; }
    this.track = track;
    this.spotifyAudio.playAudioTrack(track.preview_url)
  }

  closeModal() {
    this.album = null;
    this.track = null;
    this.spotifyAudio.pauseTrack();
  }

  ngOnDestroy() {
    this.spotifyAudioSubscription.unsubscribe();
    this.spotifyAudio.destroy();
  }

  ngOnInit() {
  }

}
