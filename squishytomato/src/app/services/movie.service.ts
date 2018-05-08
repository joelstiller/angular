import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../movie';
import { Review } from '../review';
@Injectable()
export class MovieService {
  private base = 'http://localhost:4201/api/movies';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.base);
  }

  createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.base, movie);
  }

  deleteMovie(id: string): Observable<Movie> {
    return this.http.delete<Movie>(`${this.base}/${id}`);
  }
  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.base}/${id}`);
  }
}
