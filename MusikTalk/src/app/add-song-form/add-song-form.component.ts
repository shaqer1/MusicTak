import { Component, OnInit } from '@angular/core';

import { Song } from '../Song';

@Component({
  selector: 'app-add-song-form',
  templateUrl: './add-song-form.component.html',
  styleUrls: ['./add-song-form.component.css']
})
export class AddSongFormComponent implements OnInit {
  model = new Song("Title", "");

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
