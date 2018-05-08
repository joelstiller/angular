import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Review } from '../review';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.component.html',
  styleUrls: ['./newreview.component.css']
})
export class NewreviewComponent implements OnInit {
  review: Review = new Review();
  @Output() createReview = new EventEmitter<Review>();

  id: string;
  passid;
  private sub: any;
  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewService
  ) {}

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.id = params['movieID'];
    });
    //  console.log(this.id);
    this.passid = this.id;
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value, valid } = form;
    form.value.movieID = this.passid;
    this.review.movieID = this.passid;
    // console.log('submitting form ', form.value);

    this.reviewService.createReview(this.review).subscribe(review => {
      this.createReview.emit(review);
      this.router.navigateByUrl('/');
      this.review = new Review();

      form.reset();
    });
  }
}
