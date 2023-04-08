import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { switchMap} from 'rxjs';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie!:Movies
  faSpinner = faSpinner

  constructor(private moviesService:MoviesService,
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.moviesService.getMovieDetail(id))
      )
      .subscribe(movie => {
        this.movie = movie
      })

  }



}
