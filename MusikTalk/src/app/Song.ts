export class Song {
  constructor(
    public name: string,
    public artist: string,
    public itunesLink?: string,
    public songID?: string,
    public spotifyID?: string,
    public spotifyLink?: string,
    public youtubeLink?: string
  ) {}
}
