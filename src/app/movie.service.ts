import { Injectable } from '@angular/core'; //Por defecto
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  backUrl='http://localhost:3000/movies/';

  films: object[];//This create an empty array object that selects all the movies
  filmChoosed: object[];//This create an empty array object with the selected movie 

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(this.backUrl + 'allmovies')//This will show all movies at the referred adress
  }

  locateMovies(filmchoose:any):object{//This function will find the selected movie location
    this.filmChoosed = filmchoose;
    console.log(this.filmChoosed);

    return;
  }
  searchMovieByTitle(title:string):Observable<any>{
    return this.httpClient.get(this.backUrl + 'title/' + title)
  }

  setMovie(films:object[]):void{
    this.films = films;
    console.log(this.films);
  }
  getMovie():object[]{
    return this.films;
  }

}
