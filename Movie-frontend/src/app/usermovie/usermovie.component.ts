import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieService } from '../service/movie.service';
import { MovieDetails } from '../models/moviedetails.model';


@Component({
  selector: 'app-usermovie',
  imports: [CommonModule],
  templateUrl: './usermovie.component.html',
  styleUrl: './usermovie.component.css'
})
export class UsermovieComponent {
  constructor( private movieService: MovieService) {}
  @Input() movie!: Movie;
  movieDetailss?:MovieDetails;
  isModalOpen=false;
  movieDetails(movie:any){
    this.movieService.getMovieDetails(movie.id).subscribe({
      next: (movieDetails: MovieDetails) => {
        this.movieDetailss = movie; 
      },
      error: (error) => {
        console.error('Error fetching movie details', error);
      }
    });
    this.isModalOpen = true;
  }
  closeDetails(){
    this.isModalOpen=false;
  }


}
