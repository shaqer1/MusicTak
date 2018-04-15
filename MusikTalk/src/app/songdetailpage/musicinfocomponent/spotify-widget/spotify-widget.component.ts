import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spotify-widget',
  templateUrl: './spotify-widget.component.html',
  styleUrls: ['./spotify-widget.component.css']
})
export class SpotifyWidgetComponent implements OnInit {
 
  @Input() albumName:string;
  @Input() imageURL:string;
  @Input() artist:string;
  @Input() songName:string;

  constructor() { }

  ngOnInit() {
  }

}
