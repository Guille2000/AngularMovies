import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { BehaviorSubject, tap, Observable } from 'rxjs';
import { MovieResponse, Movies } from '../website/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apiUrl = environment.baseUrl
  private apiKey = '79f0e639de5e3a1e7b6bb5f9122307c0'

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&`)
  }

  getMovieDetail(id:number):Observable<Movies>{
    return this.httpClient.get<Movies>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US&`)
  }

  searchMovie(query:string):Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}`
    )
  }
}
