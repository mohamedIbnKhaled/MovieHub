import { Component, Input } from '@angular/core';
import { Movie } from './movie.model';
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
      const token = localStorage.getItem('token');
    this.movieService.addMovie(movie,token!).subscribe({
      next: (res) => {
        console.log('Movie added to DB:', res);
      },
      error: (err) => {
        console.error('Error adding movie:', err);
      }
    });
  }
}
  
  removeMovie(movie: any) {
    console.log('Removed:', movie);
  
  }
  

}
