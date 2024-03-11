import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path:"movies",component:MoviesComponent},
    {path:"dashboard" , component:DashboardComponent},
    {path:"", redirectTo:"/dashboard", pathMatch:"full"}

];
