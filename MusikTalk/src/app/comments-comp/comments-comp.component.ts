import { Component, OnInit } from '@angular/core';
import { Comment } from '../Comment';
import { Song } from '../Song';
import { CommentServiceService } from '../comment-service.service'

@Component({
  selector: 'app-comments-comp',
  templateUrl: './comments-comp.component.html',
  styleUrls: ['./comments-comp.component.css']
})
export class CommentsCompComponent implements OnInit {

  comments: Comment[];


  comment: Comment = {
    username: '',
    comment: '',
    song: {
      songName: '"Basta Ya" by The Marias',
      songId: 1
    }
  }

  printHi(): void{
    console.log('hi');
  }

  constructor(private cs: CommentServiceService) {
    this.getComments();
  }

  getComments(): void {
    this.cs.getComments(this.comment)
      .subscribe(comments => this.comments = comments);
  }

  ngOnInit() {
  }

}
