import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { OmdbService } from '../service/omdb.service';
import { Movie } from '../models/movie.model';
import { MovieComponent } from "../movie/movie.component";
import { CommonModule } from '@angular/common';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [SearchBarComponent, MovieComponent, CommonModule],
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit  {
  movie!: Movie;
  moviesFromData: Movie[] = [];
  error: string | null = null;

  constructor(
    private omdbService: OmdbService,
    private movieService: MovieService
  ) {}

  search(query: string) {
    this.omdbService.getMovieByTitle(query).subscribe({
      next: (movie: Movie) => {
        this.movie = movie;
        this.error = null;
        console.log(movie);
      },
      error: (err) => {
        console.error('Error searching movie:', err);
        this.error = 'Failed to search movie. Please try again.';
      }
    });
  }
  
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('auth_token');
      console.log('Token from localStorage:', token);
      this.movieService.getAllMovies().subscribe({
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
