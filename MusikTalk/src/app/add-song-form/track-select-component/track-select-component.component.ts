import { Component, OnInit , Input } from '@angular/core';
import { Track } from '../../Track'

@Component({
  selector: 'app-track-select-component',
  templateUrl: './track-select-component.component.html',
  styleUrls: ['./track-select-component.component.css']
})
export class TrackSelectComponentComponent implements OnInit {

  @Input() track:Track;


  constructor() { }

  ngOnInit() {
  }

}
