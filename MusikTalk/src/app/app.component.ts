import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "MusikTalk";
  public location = '' ;

  constructor(public  router : Router, private afs: AngularFirestore) {
    this.location = router.url;
  }

  ngOnInit() {

  }

}
