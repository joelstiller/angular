import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.css']
})
export class NewmovieComponent implements OnInit {
  movie: Movie = new Movie();

  @Output() createMovie = new EventEmitter<Movie>();

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    const { value, valid } = form;
    // console.log('submitting form ', form.value);

    this.movieService.createMovie(this.movie).subscribe(movie => {
      this.createMovie.emit(movie);
      this.router.navigateByUrl('/');
      this.movie = new Movie();

      form.reset();
    });
  }
}
