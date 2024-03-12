import { Component,Input } from '@angular/core';
import { movies } from '../movies/movies';
import { NgIf} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.css'
})
export class MoviesDetailsComponent {
   mymovie?:movies
   constructor(private movieservice:MoviesService, private activatedRoute:ActivatedRoute , private loaction:Location){}

   ngOnInit(){
     this.getMovie();
   }
   getMovie(){
     const id=Number(this.activatedRoute.snapshot.paramMap.get('id'));
     this.movieservice.getMov(id).subscribe((mov)=>this.mymovie=mov);
   }
   goback(){
      this.loaction.back();
   }
}
