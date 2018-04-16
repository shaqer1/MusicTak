import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SongRetrievalService } from '../song-retrieval.service'
import { Song } from '../Song';


@Component({
  selector: 'app-songdetailpage',
  templateUrl: './songdetailpage.component.html',
  styleUrls: ['./songdetailpage.component.css']
})
export class SongdetailpageComponent implements OnInit {

  public id:string;
  song:Song = {
    itunesLink: 'https://itunes.apple.com/us/album/colors-of-the-wind/191902361?i=191902417&uo=4',
    name: 'Colors of the wind',
    songID: 'TVLn9lppXyus887n10Rv',
    spotifyID:  '1OYOLWqKmhkFIx2KC9ek1a',
    youtubeLink: 'https://www.youtube.com/results?search_query=Colors+Of+the+wind+Pochahontus',
    spotifyLink: 'https://open.spotify.com/track/1OYOLWqKmhkFIx2KC9ek1a',
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sr: SongRetrievalService
  ) { }

  ngOnInit(): void {
    this.getChatID();
  }

  getChatID(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    //this.sr.getSong(this.id)
      //.subscribe(song => this.song = song);
  }

  goBack(): void {
    this.location.back();
  }
}
