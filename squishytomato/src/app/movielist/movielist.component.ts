import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { ReviewService } from '../services/review.service';
import { Movie } from '../movie';
import { Review } from '../review';
@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  constructor(
    private router: Router,
    private movieService: MovieService,
    private reviewService: ReviewService
  ) {}
  selectedMovie: Movie;
  movies: Array<Movie> = [];
  reviews: Array<Review> = [];
  ngOnInit() {
    this.movieService.getMovies().subscribe(movies => {
      movies.forEach(movie => {
        // console.log(movie);
        let stars = 0;
        let count = 0;
        this.reviewService.getByMovie(movie._id).subscribe(reviews => {
          const holder = reviews as any;
          holder.forEach(review => {
            stars += review.stars;
            count++;
            //      console.log(stars);
          });
          movie.stars = String(stars / count);
        });
      }),
        (this.movies = movies);
      //   console.log(movies);
    });
  }
}
