import { Injectable } from '@angular/core';
import { movies } from './movies/movies';
import { FavMovies } from './My_Movies';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url="api/movies";
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}
  constructor(private messageservice:MessageService , private http:HttpClient) { }
  getMovies():Observable<movies[]>{
    // const message= of(FavMovies);
    this.messageservice.add("All the movies are displayed....");
    return this.http.get<movies[]>(this.url);
    // return message;
  }
  getMov(id:number):Observable<movies>{
    // const movie=FavMovies.find(mov=>mov.id===id)!;
    const urlid=`${this.url}/${id}`
    this.messageservice.add(`Selected movie is ${id}`);
    return this.http.get<movies>(urlid)
    // return of(movie);
  }
  updateMovie(movie:movies):Observable<any>{
    return this.http.put(this.url,movie,this.httpOptions);
  }
  add(movie:movies):Observable<movies>{
    return this.http.post<movies>(this.url,movie,this.httpOptions)
  }
  delete(id:number):Observable<movies>{
    const urlid=`${this.url}/${id}`
    return this.http.delete<movies>(urlid,this.httpOptions);
  }
}
