import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from '../../models/movie';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies:Movies[] = []
  faSpinner = faSpinner
  
  constructor(private moviesService:MoviesService){}
 

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
  this.moviesService.getMovies()
  .subscribe(data => {
    this.movies = data.results 
  })
  }
}
