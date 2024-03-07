import { Component,Input } from '@angular/core';
import { movies } from '../movies/movies';
import { NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css'
})
export class MoviesDetailsComponent {
  @Input() mymovie?:movies
}
