import { Injectable } from '@angular/core';
import { movies } from './movies/movies';
import { FavMovies } from './My_Movies';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private messageservice:MessageService) { }
  getMovies():Observable<movies[]>{
    const message= of(FavMovies);
    this.messageservice.add("All the movies are displayed....");
    return message;
  }
  getMov(id:number):Observable<movies>{
    const movie=FavMovies.find(mov=>mov.id===id)!;
    this.messageservice.add(`Selected movie is ${id}`);
    return of(movie);
  }
  
}
