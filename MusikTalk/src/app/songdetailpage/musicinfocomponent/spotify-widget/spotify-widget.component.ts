import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../../Track';
import { Song } from '../../../Song'

@Component({
  selector: 'app-spotify-widget',
  templateUrl: './spotify-widget.component.html',
  styleUrls: ['./spotify-widget.component.css']
})
export class SpotifyWidgetComponent implements OnInit {


  @Input() track:Track;
  @Input() song:Song;

  constructor() { }

  ngOnInit() {

  }

}
