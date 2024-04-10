import { Injectable } from '@angular/core';
import { movies } from './movies/movies';
import { FavMovies } from './My_Movies';
import { Observable,of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { catchError,tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url="api/movies";
  httpOptions={headers:new HttpHeaders({'Content-type':'json-description'})}
  constructor(private messageservice:MessageService , private http:HttpClient) { }
  getMovies():Observable<movies[]>{
    // const message= of(FavMovies);
    // this.messageservice.add("All the movies are displayed....");
    return this.http.get<movies[]>(this.url).pipe(
      tap(_=>this.log('fetched movies..')),
     catchError(this.handleError<movies[]>('getMovies',[]))
    );
    // return message;
  }
  getMov(id:number):Observable<movies>{
    // const movie=FavMovies.find(mov=>mov.id===id)!;
    const urlid=`${this.url}/${id}`
    // this.messageservice.add(`Selected movie is ${id}`);
    return this.http.get<movies>(urlid).pipe(
      tap(_=>this.log(`fetched movie detail whose id=${id}...`)),
      catchError(this.handleError<movies>(`getMov id=${id}`))
    );;
    // return of(movie);
  }
  updateMovie(movie:movies):Observable<any>{
    return this.http.put(this.url,movie,this.httpOptions);
  }
  add(movie:movies):Observable<movies>{
    return this.http.post<movies>(this.url,movie,this.httpOptions).pipe(
      tap((newmovie:movies)=>this.log(`New character added with id=${newmovie.id}`)),
      catchError(this.handleError<movies>('add'))
    );
  }
  delete(id:number):Observable<movies>{
    const urlid=`${this.url}/${id}`
    return this.http.delete<movies>(urlid,this.httpOptions).pipe(
      tap(_=>this.log(`deleted movie whose id=${id}`)),
      catchError(this.handleError<movies>('delete'))
    );
  }
  searchdata(term:string):Observable<movies[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<movies[]>(`${this.url}/?name=${term}`).pipe(
      tap(_=>this.log(`searching data for ${term}`)),
      catchError(this.handleError<any>('searchdata',[]))
    );
  }
  private handleError<T>(operation='operation', result?:T){
    return (error:any):Observable<T>=>{
     this.log(`${operation} failed: ${error.message}`)
     console.log(error);
      return of(result as T)
    }
 }
 private log(message:string){
   this.messageservice.add(`${message}`);
 }
}
