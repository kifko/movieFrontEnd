import { Injectable } from '@angular/core'; //Por defecto
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  backUrl='http://localhost:3000/movies/';

  movie: object[];//This create an empty array object that selects all the movies
  movieSelected: object[];//This create an empty array object with the selected movie 

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')//This will show all movies at the referred adress
  }

  locateMovie(movieSelect:any):object{//This function will find the selected movie location
    this.movieSelected = movieSelect;
    console.log(this.movieSelected);

    return;
  }
  searchMovieByTitle(title:string):Observable<any>{
    return this.httpClient.get(this.backUrl + 'title/' + title)
  }

  setMovie(movie:object[]):void{
    this.movie=movie;
    console.log(this.movie);
  }
  getMovie():object[]{
    return this.movie;
  }

}
