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
  song:Song;


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
    console.log(this.id);
    this.sr.getSong(this.id)
      .subscribe(song => this.song = song);
  }

  goBack(): void {
    this.location.back();
  }
}
