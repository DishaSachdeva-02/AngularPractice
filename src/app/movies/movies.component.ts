import { Component } from '@angular/core';
import { FavMovies } from '../My_Movies';
import { NgFor,NgIf } from '@angular/common';
import { movies } from './movies';
import { MoviesDetailsComponent } from '../movies-details/movies-details.component';
import { MoviesService } from '../movies.service';
import { MessageService } from '../message.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor,NgIf,MoviesDetailsComponent,RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  // movies1=FavMovies
  movies:movies[]=[];
  constructor(private movieservice:MoviesService,private messageservice:MessageService){}
  ngOnInit():void{
     this.getMovies();
  }
  getMovies():void{
    this.movieservice.getMovies().subscribe(movie=>this.movies=movie)
  }
  selectedmovie?:movies
  onSelect(m:movies):void{
    this.selectedmovie=m;
    this.messageservice.add(`You clicked on movie ${m.id} name ${m.name}`)
  }
  add(name:string){
    if(name){
      name=name.trim();
    }
    this.movieservice.add({name} as movies).subscribe(m=>this.movies.push(m));
  }
  delete(movie:movies){
    this.movies=this.movies.filter(m=>m!=movie);
     this.movieservice.delete(movie.id).subscribe();
  }
}
