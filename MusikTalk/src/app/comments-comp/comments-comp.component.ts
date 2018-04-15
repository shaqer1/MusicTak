import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../Comment';
import { Song } from '../Song';
import { CommentServiceService } from '../comment-service.service'

@Component({
  selector: 'app-comments-comp',
  templateUrl: './comments-comp.component.html',
  styleUrls: ['./comments-comp.component.css']
})
export class CommentsCompComponent implements OnInit {

  @Input() songId: string;
  comments: Comment[];


  comment: Comment = {
    owner_name: '',
    message: '',
    down_votes: 0,
    up_votes: 0,
    post_time: 0
  }

  constructor(private cs: CommentServiceService) {
    this.songId = 'TVLn9lppXyus887n10Rv';
    this.getComments();
  }

  getComments(): void {
    this.cs.getComments(this.songId)
      .subscribe(comments => this.comments = comments);
  }

  ngOnInit() {
  }

}
