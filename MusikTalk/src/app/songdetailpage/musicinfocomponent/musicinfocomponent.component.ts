import { Component, OnDestroy, Input } from '@angular/core';
import { Song } from '../../Song';
import { SongInfo } from '../../SongInfo';
import { Track } from '../../Track';
import { SpotifyService } from '../../spotify.service';
import { TokenResponse } from '../../TokenResponse';

import 'rxjs/Rx';


@Component({
  selector: 'app-musicinfocomponent',
  templateUrl: './musicinfocomponent.component.html',
  styleUrls: ['./musicinfocomponent.component.css']
})
export class MusicinfocomponentComponent implements OnDestroy {
  title = 'this is going to look so fucking cool Shafay!!!!';
  @Input() song:Song;
  track:Track;
  /* = {
    songName:'Colors of the Wind',
    artist:'Disney',
    imageURL:'https://i.scdn.co/image/211350fe562cc85a07d26b5869559418b4a44e3f',
    releaseDate:Date.now(),
    albumName:'Pochahontas'
  };

*/

  constructor(  public spotifyAPI: SpotifyService) {
    console.log(this.song);
      this.spotifyAPI.login()
      .subscribe(() => {
        this.searchTrack(this.song.spotifyID)
      });

  }

  searchTrack(id:string){
    this.spotifyAPI.searchTrack(id)
    .subscribe(res => {
      console.log(res);
      this.track=res;
      //this.track = res.items[0]
    })
  }



  ngOnDestroy() {
  }

}
