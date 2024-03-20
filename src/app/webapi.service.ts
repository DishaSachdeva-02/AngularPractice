import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { movies } from './movies/movies';
@Injectable({
  providedIn: 'root'
})
export class WebapiService implements InMemoryDbService{

   createDb(){
    const movies=[
      {name:'Dangal' , ReleaseYear:2016,id:1},
      {name:'Secret Superstar' , ReleaseYear:2017,id:2},
      {name:'Soorma' , ReleaseYear:2018,id:3},
      {name:'The Ghazi Attack' , ReleaseYear:2016 , id:4},
      {name:'Uri' , ReleaseYear:2019, id:5}
    ]
    return {movies};
   }
   genId(movies:movies[]):number{
    return movies.length>0 ? Math.max(...movies.map(movie=>movie.id))+1:1;
   }
}
