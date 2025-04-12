import { Component, Input, output } from '@angular/core';
import { Movie } from '../models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  constructor(private movieService: MovieService) { }    
  @Input() movie!: Movie;
  
  addMovie(movie: any) {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('auth_token');
    this.movieService.addMovie(movie).subscribe();
  }
}
removeMovie(movie: any) {
  const token = localStorage.getItem('auth_token');
  this.movieService.deleteMovie(movie).subscribe({
    next: (response) => {
      console.log('Movie deleted successfully', response);
      window.location.reload(); 
    },
    error: (error) => {
      console.error('Error deleting movie:', error);
    }
  });
}

}
