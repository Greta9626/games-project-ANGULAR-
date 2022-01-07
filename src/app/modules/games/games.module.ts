import { MainPlatformComponent } from './components/main-platform/main-platform.component';
import { BannerCardComponent } from './components/banner-card/banner-card.component';
import { MainDeveloperComponent } from './components/main-developer/main-developer.component';
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
import { MainMostPlayedComponent } from './components/main-most-played/main-most-played.component';
import { FormsModule } from '@angular/forms';
import { MostPlayedCardComponent } from './components/most-played-card/most-played-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboveTheFoldComponent } from './components/above-the-fold/above-the-fold.component';


@NgModule({
  declarations: [
    MainContainerComponent,
    HomepageComponent,
    PlatformComponent,
    DeveloperComponent,
    MainHomepageComponent,
    MainDeveloperComponent,
    GameCardComponent,
    GamesListComponent,
    MostPlayedComponent,
    MainMostPlayedComponent,
    MostPlayedCardComponent,
    MainPlatformComponent,
    BannerCardComponent,
    ModalComponent,
    AboveTheFoldComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class GamesModule { }
