import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';
import { Review } from '../review';
import { ReviewService } from '../services/review.service';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.css']
})
export class NewmovieComponent implements OnInit {
  review: Review = new Review();
  movie: Movie = new Movie();
  errors = [];
  @Output() createMovie = new EventEmitter<Movie>();
  @Output() createReview = new EventEmitter<Review>();

  constructor(
    private movieService: MovieService,
    private router: Router,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    let pass_id;
    const { value, valid } = form;
    // console.log('submitting form ', form.value);

    this.movieService.createMovie(this.movie).subscribe(
      movie => {
        if (Array.isArray(movie)) {
          this.errors = movie;
          throw new Error('Someone is playing games!');
        } else {
          this.createMovie.emit(movie);
          console.log(movie._id);
          pass_id = movie._id;
          // this.router.navigateByUrl('/');
          this.movie = new Movie();
        }
      },
      err => console.log(err),
      () => {
        form.value.movieID = pass_id;
        this.review.movieID = pass_id;
        this.reviewService.createReview(this.review).subscribe(review => {
          if (Array.isArray(review)) {
            this.errors = review;
          } else {
            this.createReview.emit(review);
            this.router.navigateByUrl('/');
            this.review = new Review();
            form.reset();
          }
        });
      }
    );
  }
}
