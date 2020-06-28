import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  showMovies: object;

  constructor(public MovieService:MovieService) { }

  ngOnInit() {
    this.MovieService.getMovies()
    .subscribe(
      res => this.showMovies = res,
      error => console.error(error),
      () => console.log(this.showMovies)
    )
  }
  searchTitle(event){
    if(event.target.value.length >= 3){
      this.MovieService.searchMovieByTitle(event.target.value).subscribe(res=>this.MovieService.setMovie(res))
    }
  }

}
