import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { MovieDetails } from '../models/moviedetails.model';
import { error } from 'console';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/api/movies';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
      return throwError(() => new Error('Something went wrong; please try again later.'));
  }

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  addMovie(movie: MovieDetails): Observable<MovieDetails> {
    return this.http.post<MovieDetails>(this.apiUrl, movie, {
      headers: this.getHeaders()
    }).pipe(
      catchError(error => {
        console.error('Error adding movie:', error);
        return this.handleError(error);
      })
    );
  }  

  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {headers:this.getHeaders()})
      .pipe(
        catchError(error => {
          console.error('Error removing movie:', error);
          return this.handleError(error);
        })
      );
  }
  getMovieDetails(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }
}
