import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MovieService } from './services/movie.service';
import { ReviewService } from './services/review.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MovielistComponent } from './movielist/movielist.component';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { NewreviewComponent } from './newreview/newreview.component';
import { ListreviewComponent } from './listreview/listreview.component';
import { Movie } from './movie';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovielistComponent,
    NewmovieComponent,
    NewreviewComponent,
    ListreviewComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [MovieService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {}
