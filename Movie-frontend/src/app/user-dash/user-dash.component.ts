import { MovieComponent } from "../movie/movie.component";
import { CommonModule } from '@angular/common';
import { MovieService } from '../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-user-dash',
  imports: [MovieComponent,CommonModule],
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.css'
})
export class UserDashComponent implements OnInit  {
  movie!: Movie;
  moviesFromData: Movie[] = [];
  error: string | null = null;
  constructor( private movieService: MovieService) {}
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');
      console.log('Token from localStorage:', token);
      this.movieService.getAllMovies(token!).subscribe({
        next: (movies) => {
          console.log('Movies loaded successfully:', movies);
          this.moviesFromData = movies;
          this.error = null;
        },
        error: (err) => {
          console.error('Error loading movies:', err);
          this.error = 'Failed to load movies. Please check your connection and try again.';
          if (err.status === 401) {
            this.error = 'Authentication failed. Please login again.';
          }
        }
      });
    }
  }

}
