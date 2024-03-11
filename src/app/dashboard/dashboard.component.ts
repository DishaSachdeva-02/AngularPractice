import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { movies } from '../movies/movies';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  movies:movies[]=[];
  constructor(private movieservice:MoviesService){}
  ngOnInit(){
    this.getMovies();
  }
  getMovies(){
    this.movieservice.getMovies().subscribe(movie=>this.movies=movie)
  }
}
