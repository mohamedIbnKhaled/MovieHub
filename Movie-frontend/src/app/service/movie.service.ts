import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from '../movie/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:8080/api/movies';

  constructor(private http: HttpClient) {}

  private getHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getAllMovies(token: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl, { headers: this.getHeaders(token) })
      .pipe(catchError(this.handleError));
  }

  addMovie(movie: Movie, token: string): Observable<Movie> {
    const headers = this.getHeaders(token);
    var respo= this.http.post<Movie>(this.apiUrl, movie, { headers })
      .pipe(
        catchError(error => {
          console.error('Error adding movie:', error);
          return this.handleError(error);
        })
      );
      console.log(respo);
      return respo;
  }

  deleteMovie(id: number, token: string): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers }) 
      .pipe(
        catchError(error => {
          console.error('Error removing movie:', error);
          return this.handleError(error);
        })
      );
}
}
