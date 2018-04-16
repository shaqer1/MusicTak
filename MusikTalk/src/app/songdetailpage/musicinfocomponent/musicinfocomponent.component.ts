import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../Song';
import { SongInfo } from '../../SongInfo';
import { SpotifyService } from '../../spotify.service';


@Component({
  selector: 'app-musicinfocomponent',
  templateUrl: './musicinfocomponent.component.html',
  styleUrls: ['./musicinfocomponent.component.css']
})
export class MusicinfocomponentComponent implements OnInit {
  title = 'this is going to look so fucking cool Shafay!!!!';
  @Input() song:Song;
  songInfo: SongInfo = {
    songName:'Colors of the Wind',
    artist:'Disney',
    imageURL:'https://i.scdn.co/image/211350fe562cc85a07d26b5869559418b4a44e3f',
    releaseDate:Date.now(),
    albumName:'Pochahontas'
  };


  constructor(private ss: SpotifyService) {

  }

  ngOnInit() {
  }

}
