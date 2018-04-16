import { Component, OnInit, Input } from '@angular/core';
import { SongInfo } from '../../../SongInfo';

@Component({
  selector: 'app-spotify-widget',
  templateUrl: './spotify-widget.component.html',
  styleUrls: ['./spotify-widget.component.css']
})
export class SpotifyWidgetComponent implements OnInit {


  @Input() info:SongInfo;

  constructor() { }

  ngOnInit() {

  }

}
