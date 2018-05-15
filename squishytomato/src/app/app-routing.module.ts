import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovielistComponent } from './movielist/movielist.component';
import { NewmovieComponent } from './newmovie/newmovie.component';
import { NewreviewComponent } from './newreview/newreview.component';
import { ListreviewComponent } from './listreview/listreview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: MovielistComponent
      },
      {
        path: 'new',
        component: NewmovieComponent
      },
      {
        path: 'review/:movieID',
        component: NewreviewComponent,
        data: { movieID: ':movieID' }
      },
      {
        path: ':movieID',
        component: ListreviewComponent
      }
    ]
  },
  {
    path: '**',
    component: MovielistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
