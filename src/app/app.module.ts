import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GameCardComponent } from './modules/games/components/game-card/game-card.component';
import { BannerCardComponent } from './modules/games/components/banner-card/banner-card.component';
import { MainHomepageComponent } from './modules/games/components/main-homepage/main-homepage.component';
import { MainPlatformComponent } from './modules/games/components/main-platform/main-platform.component';
import { MainMostPlayedComponent } from './modules/games/components/main-most-played/main-most-played.component';
import { MainDeveloperComponent } from './modules/games/components/main-developer/main-developer.component';
import { MostPlayedCardComponent } from './modules/games/components/most-played-card/most-played-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GameCardComponent,
    BannerCardComponent,
    MainHomepageComponent,
    MainPlatformComponent,
    MainMostPlayedComponent,
    MainDeveloperComponent,
    MostPlayedCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
