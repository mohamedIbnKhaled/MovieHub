import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie.model';
import { MovieDetails } from '../models/moviedetails.model';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiKey = 'b1139fde'; 
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  getMovieByTitle(title: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiUrl}?t=${title}&apikey=${this.apiKey}`);
  }
}
