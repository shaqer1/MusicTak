import { Pipe, PipeTransform } from '@angular/core';
import { Song } from './Song';

/*
 * Filter a list of songs by name
 * Usage:
 *    Song[] | songsearch:"song name"
 */
@Pipe({
  name: 'search'
})
export class SongSearchPipe implements PipeTransform {
  transform(value, keys: string, term: string) {
    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }
}
