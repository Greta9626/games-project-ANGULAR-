import { GamesListComponent } from './components/games-list/games-list.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { MainHomepageComponent } from './components/main-homepage/main-homepage.component';
import { MainContainerComponent } from './components/MAIN-CONTAINER/main-container.component';
import { MostPlayedComponent } from './pages/most-played/most-played.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { PlatformComponent } from './pages/platform/platform.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { GamesRoutingModule } from './games-routing-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainContainerComponent,
    HomepageComponent,
    PlatformComponent,
    MostPlayedComponent,
    DeveloperComponent,
    MainHomepageComponent,
    GameCardComponent,
    GamesListComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    HttpClientModule
  ]
})
export class GamesModule { }
