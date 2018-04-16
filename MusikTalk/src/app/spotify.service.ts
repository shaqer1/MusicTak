import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenResponse } from './TokenResponse';

@Injectable()
export class SpotifyService {

  private code = 'Basic NDY5ZjMyZjgyZWZhNGRiZjkzNTllZGEwNzM1YzEwODQ6MWVjZTE1YWRhOGIzNDNkYjkzYzAyZGUwYjNjY2NhNmE=';
  private tkr:TokenResponse;
  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.code
    })
  };

  constructor(private _http:HttpClient) {
    this.getToken()
    .subscribe(tkr => this.tkr = tkr);
  }

  private getToken(){
    return this._http.post<TokenResponse>("https://accounts.spotify.com/api/token", "grant_type=client_credentials", this.httpOptions);
  }

}
