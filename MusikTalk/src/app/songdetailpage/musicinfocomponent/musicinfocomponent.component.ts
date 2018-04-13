import { Component, OnInit } from '@angular/core';
import { Song } from '../../song';


@Component({
  selector: 'app-musicinfocomponent',
  templateUrl: './musicinfocomponent.component.html',
  styleUrls: ['./musicinfocomponent.component.css']
})
export class MusicinfocomponentComponent implements OnInit {
  title = 'this is going to look so fucking cool Shafay!!!!';
  
  song: Song = {
     id: 1,
     name: 'ABC'
  };


  constructor() { }

  ngOnInit() {
  }

}
