import { Injectable } from '@angular/core';
import {  Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { TokenResponse } from './TokenResponse';
import 'rxjs/add/operator/do';

@Injectable()
export class SpotifyService {

  client_id = "469f32f82efa4dbf9359eda0735c1084";
  client_secret = "1ece15ada8b343db93c02de0b3ccca6a";

  private accessToken: any;
  private tokenType: string;
  artist = 'Giovanni Allevi';

  constructor(private http:Http) {}

  login() {
    //let authorizationTokenUrl = 'https://accounts.spotify.com/api/token';
    let authorizationTokenUrl = `/api/token`;

    let header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    let options = new RequestOptions({ headers: header });
    let body = 'grant_type=client_credentials';

    console.log(authorizationTokenUrl);
    return this.http.post(authorizationTokenUrl, body, options).map(data => data.json())
      .do(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error));
    }

  private getToken(){
    //console.log(this.httpOptions);
    let params = ('grant_type=client_credentials');
    let header = new Headers();
    header.append( 'Authorization', 'Basic  NDY5ZjMyZjgyZWZhNGRiZjkzNTllZGEwNzM1YzEwODQ6MWVjZTE1YWRhOGIzNDNkYjkzYzAyZGUwYjNjY2NhNmE=');
    header.append('Content-Type' , 'application/x-www-form-urlencoded;');
    let options = new RequestOptions({ headers: header });
    console.log(params);
    return this.http.post('/api/token', params , options)
    .map(data => data.json())
    .do(token => {
      this.accessToken = token.access_token;
      this.tokenType = token.token_type;
    }, error => console.log(error));
  }

  searchTrack(id:string){
    const options = this.getOptions();
    const path = '/v1/tracks/'+id;
    return this.http.get(path, options)
      .map(res => res.json());
  }

  searchAlbums(title: string) {
    const options = this.getOptions();
    console.log(options);
    return this.http.get('https://api.spotify.com/v1/search?query=${title}&type=album', options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  searchTracks(title:string){
    const options = this.getOptions();
    console.log('/v1/search?q='+title+'&type=track');
    return this.http.get('/v1/search?q='+title+'&type=track',options)
      .map(res=>res.json())
      .publishLast()
      .refCount()
  }




  loadAlbum(id) {
    const options = this.getOptions();
    return this.http.get(`https://api.spotify.com/v1/albums/${id}`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  private getOptions() {
    console.log(this.accessToken);
    console.log(this.tokenType);

    let header = new Headers();
    header.append('Authorization', this.tokenType + ' ' + this.accessToken);
    let options = new RequestOptions({ headers: header });

    return options;
  }

}
