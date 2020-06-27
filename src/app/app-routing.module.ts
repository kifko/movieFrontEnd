import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { InfoMoviesComponent } from './components/info-movies/info-movies.component';
import { IndexComponent } from './components/index/index.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path:"display", component:MoviesListComponent},
  {path:"info", component:InfoMoviesComponent},
  {path:"", component:IndexComponent},
  {path:"search", component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
