import { Component } from '@angular/core';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import {faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MoviesService } from 'src/app/services/movies.service';
import { RequestTatus } from '../../models/Request';
import { Movies } from '../../models/movie';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  status:RequestTatus = 'init'
  isOpen = false;
  movies!:Movies[] 
  faSearch = faSearch
  faSpinner = faSpinner


  constructor(private moviesService:MoviesService){

  }

  search(termino: string) {
    if (termino) {
      this.isOpen = true;
      this.moviesService.searchMovie(termino).subscribe({
        next: (response) => {
         this.movies = response.results
         if(this.movies.length == 0){
            this.status = 'failed'
         } else {
          this.status = 'success'
         } 
        },
        error: () => {
        },
      });
    } else {
      this.isOpen = false;
    }
  }  

}
