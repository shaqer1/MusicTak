import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { NotifyService } from './notify.service';

import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


import { EmailPasswordCredentials } from '../EmailPasswordCredentials';

interface User {
  uid: string;
  email?: string | null;
  photoURL?: string;
  displayName?: string;
}

@Injectable()
export class AuthService {

  user: Observable<User | null>;
  userDB: User;
  private pendingUser = new BehaviorSubject<string>('dsfsd');
  name = this.pendingUser.asObservable();

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notify: NotifyService) {

    this.user = this.afAuth.authState
      .switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

  ////// OAuth Methods /////
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(credential.user);
      })
      .catch((error) => this.handleError(error) );
  }

  //// Anonymous Auth ////
  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => {
        console.error(error.code);
        console.error(error.message);
        this.handleError(error);
      });
  }
  email: string;
  password: string;
  username: string;
  photoURL: string;

  //// Email/Password Auth ////
  emailSignUp(credentials: EmailPasswordCredentials) {
    this.email = credentials.email;
    this.password = credentials.password;
    this.username = credentials.displayName;
    this.photoURL = credentials.photoURL;
    console.log(this.username, this.photoURL);
    return this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((user) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        //TODO: update user naem etc.
        return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }

  emailLogin(credentials: EmailPasswordCredentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((user: User) => {
        this.notify.update('Welcome to Firestarter!!!', 'success');
        console.log('in service settting observable',user.uid);
        this.userDB = user;
        console.log(user.displayName);
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
        userRef.valueChanges().subscribe(
            (u: User) => {
              console.log('in service settting observable');
              this.pendingUser.next(u.displayName);
            }
          );
          return;
        //return this.updateUserData(user); // if using firestore
      })
      .catch((error) => this.handleError(error) );
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => this.notify.update('Password update email sent', 'info'))
      .catch((error) => this.handleError(error));
  }

  signOut() {
    console.log('here');
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/search']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
    this.notify.update(error.message, 'error');
  }
  // private getUserData(user: User): void {
  //   const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
  //    userRef.valueChanges().subscribe(
  //     (u: User) => {
  //       console.log('u  ',u, u.displayName, u.photoURL);
  //       if(u.displayName){
  //         console.log('here');
  //         this.hasName = true;
  //       }
  //       if(u.photoURL){
  //         this.hasLink = true;
  //       }
  //     }
  //   );
  // }
  // userDB: User;
  // Sets user data to firestore after succesful login
  private updateUserData(user: User) {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    // this.afs.doc(`users/${user.uid}`).ref.get().then(function(doc) {
    //   if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //       this.userDB = doc.data();
    //   } else {
    //       console.log("No such document!");
    //   }
    // }).catch(function(error) {
    //     console.log("Error getting document:", error);
    // });

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || this.username || 'nameless user',
      photoURL: user.photoURL || this.photoURL || 'https://goo.gl/Fz9nrQ',
    };
    return userRef.set(data);
  }
}
