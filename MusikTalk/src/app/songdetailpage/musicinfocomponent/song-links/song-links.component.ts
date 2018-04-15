import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-song-links',
  templateUrl: './song-links.component.html',
  styleUrls: ['./song-links.component.css']
})
export class SongLinksComponent implements OnInit {
  @Input() yLink:string;
  @Input() iLink:string;
  @Input() sLink:string;
  constructor() { }

  ngOnInit() {
  }

}
