import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MessageComponent } from './message/message.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MoviesComponent,MessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MY FAVOURITE MOVIES';
}
