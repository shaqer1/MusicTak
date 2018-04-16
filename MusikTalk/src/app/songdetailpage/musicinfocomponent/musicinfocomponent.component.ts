import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../../Song';


@Component({
  selector: 'app-musicinfocomponent',
  templateUrl: './musicinfocomponent.component.html',
  styleUrls: ['./musicinfocomponent.component.css']
})
export class MusicinfocomponentComponent implements OnInit {
  title = 'this is going to look so fucking cool Shafay!!!!';
  @Input() id:string;


  constructor() { }

  ngOnInit() {
  }

}
