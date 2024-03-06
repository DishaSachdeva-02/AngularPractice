import { Component } from '@angular/core';
import { FavMovies } from '../My_Movies';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies=FavMovies
}
