import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../../Song'

@Component({
  selector: 'app-song-links',
  templateUrl: './song-links.component.html',
  styleUrls: ['./song-links.component.css']
})
export class SongLinksComponent implements OnInit {
  @Input() song:Song;
  constructor() { }

  ngOnInit() {
  }

}
