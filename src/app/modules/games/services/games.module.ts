import { MainContainerComponent } from './../components/MAIN-CONTAINER/main-container.component';
import { MostPlayedComponent } from './../pages/most-played/most-played.component';
import { DeveloperComponent } from './../pages/developer/developer.component';
import { PlatformComponent } from './../pages/platform/platform.component';
import { HomepageComponent } from './../pages/homepage/homepage.component';
import { GamesRoutingModule } from './games-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    /* MainContainerComponent,
    HomepageComponent,
    PlatformComponent,
    MostPlayedComponent,
    DeveloperComponent, */
  ],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
