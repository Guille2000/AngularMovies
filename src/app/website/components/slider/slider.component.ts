import { Component, Input } from '@angular/core';
import { Movies } from '../../models/movie';
import Swiper from 'swiper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input() movies: Movies[] = [];
  mySwiper?:Swiper;
  constructor() {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper', {
      loop: true,
    });

    
  }
  onSlidePrev(){

    this.mySwiper?.slidePrev();

  }
  onSlideNext(){

    this.mySwiper?.slideNext();

  }


}
