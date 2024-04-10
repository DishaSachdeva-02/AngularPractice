import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MessageComponent } from './message/message.component';
import { RouterModule } from '@angular/router';
import { movies } from './movies/movies';
import { Observable,Subject ,debounceTime,distinctUntilChanged,switchMap} from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { MoviesService } from './movies.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MoviesComponent,MessageComponent,RouterModule,AsyncPipe,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MY FAVOURITE MOVIES';
  constructor(private movieservice:MoviesService){}
  private searchTerms=new Subject<string>();
  movies$!:Observable<movies[]>;
  search(term:string){
    this.searchTerms.next(term);
  }
  ngOnInit(){
    this.movies$=this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term:string)=>this.movieservice.searchdata(term))
    )
    console.log(this.movies$);
  }
}
