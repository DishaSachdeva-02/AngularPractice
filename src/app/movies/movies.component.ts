import { Component } from '@angular/core';
import { FavMovies } from '../My_Movies';
import { NgFor,NgIf } from '@angular/common';
import { movies } from './movies';
import { MoviesDetailsComponent } from '../movies-details/movies-details.component';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor,NgIf,MoviesDetailsComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies1=FavMovies
  
  selectedmovie?:movies
  onSelect(m:movies):void{
    this.selectedmovie=m;
  }

}
