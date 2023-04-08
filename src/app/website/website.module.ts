import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SliderComponent } from './components/slider/slider.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { WebsiteRoutingModule } from './website-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    MovieComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    OverlayModule
  ]
})
export class WebsiteModule { }
