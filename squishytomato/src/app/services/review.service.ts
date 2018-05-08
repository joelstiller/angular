import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Review } from '../review';
import { Movie } from '../movie';
@Injectable()
export class ReviewService {
  private base = '/api/reviews';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.base);
  }
  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.base, review);
  }
  deleteReview(id: string): Observable<Review> {
    return this.http.delete<Review>(`${this.base}/${id}`);
  }
  getReview(id: string): Observable<Review> {
    return this.http.get<Review>(`${this.base}/${id}`);
  }
  getByMovie(id: string): Observable<Review> {
    return this.http.get<Review>(`${this.base}/bymovie/${id}`);
  }
}
