import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../review';
import { Movie } from '../movie';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-listreview',
  templateUrl: './listreview.component.html',
  styleUrls: ['./listreview.component.css']
})
export class ListreviewComponent implements OnInit {
  review: Review = new Review();
  movie: Movie = new Movie();

  @Output() createReview = new EventEmitter<Review>();
  id: string;
  passid;
  private sub: any;
  constructor(
    private router: Router,
    private reviewService: ReviewService,
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}
  reviews: Array<Review> = [];
  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['movieID'];
    });
    this.passid = this.id;
    this.movieService.getMovie(this.passid).subscribe(movie => {
      this.movie = movie;
    });
    this.reviewService.getByMovie(this.passid).subscribe(reviews => {
      const something = reviews as any;
      this.reviews = something.sort(function(a, b) {
        return a.stars - b.stars;
      });
    });

    console.log(this.reviews);
  }
  onDelete(id: number) {
    // console.log('delete review', id);
    this.reviewService.deleteReview(String(id)).subscribe(returnedReview => {
      this.reviews = this.reviews.filter(b => b._id !== returnedReview._id);
    });
  }
  deleteMovie(id: string) {
    // console.log('delete movie', id);
    this.reviewService.getByMovie(id).subscribe(reviews => {
      this.reviews.forEach(review => {
        const passid = review._id;
        this.reviewService.deleteReview(passid).subscribe();
      });
    });
    this.movieService.deleteMovie(id).subscribe(returnedMovie => {});

    location.href = '/';
  }
}
