import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-info-movies',
  templateUrl: './info-movies.component.html',
  styleUrls: ['./info-movies.component.css']
})
export class InfoMoviesComponent implements OnInit {

  movieShow:any;

  constructor(private MovieService:MovieService) { }

  ngOnInit(): void {
    this.movieShow = this.MovieService.filmChoosed;
  }

}
