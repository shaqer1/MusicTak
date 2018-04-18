import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../Comment';
import { Song } from '../Song';
import { CommentServiceService } from '../comment-service.service';
import { AuthService } from '../core/auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-comments-comp',
  templateUrl: './comments-comp.component.html',
  styleUrls: ['./comments-comp.component.css']
})
export class CommentsCompComponent implements OnInit {
  song: string;
  comments: Comment[];


  comment: Comment = {
    owner_name: '',
    message: '',
    down_votes: 0,
    up_votes: 0,
    post_time: 0
  }

  constructor(
    private route: ActivatedRoute,
    public asu: AuthService,
    public cs: CommentServiceService) {
    //this.song = 'TVLn9lppXyus887n10Rv';
    this.song = this.route.snapshot.paramMap.get('id');
    this.getComments();
  }

  getComments(): void {
    this.cs.getComments(this.song)
      .subscribe(comments => this.comments = comments);
      //console.log(this.comments);
  }

  ngOnInit() {
    // this.as.name.subscribe(name => {
    //   console.log(name);
    //   this.comment.owner_name = name;
    //     console.log(this.comment.owner_name);
    // });
  }

}
