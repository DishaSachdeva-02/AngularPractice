import { Injectable } from '@angular/core';
import { movies } from './movies/movies';
import { FavMovies } from './My_Movies';
import { Observable,of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }
  getMovies():Observable<movies[]>{
    return of(FavMovies);
  }
}
