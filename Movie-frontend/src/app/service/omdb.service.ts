import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie/movie.model';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  private apiKey = 'b1139fde'; 
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  getMovieByTitle(title: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}?t=${title}&apikey=${this.apiKey}`);
  }
}
