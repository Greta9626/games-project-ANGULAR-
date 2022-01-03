import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerCardComponent } from './modules/games/components/banner-card/banner-card.component';
import { MainPlatformComponent } from './modules/games/components/main-platform/main-platform.component';
import { MainMostPlayedComponent } from './modules/games/components/main-most-played/main-most-played.component';
import { MainDeveloperComponent } from './modules/games/components/main-developer/main-developer.component';
import { MostPlayedCardComponent } from './modules/games/components/most-played-card/most-played-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
<<<<<<< HEAD
import { MainContainerComponent } from './modules/games/components/MAIN-CONTAINER/main-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
=======
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> b02cfd9a7dc1445583245376ec0d07758d4a3bd2

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerCardComponent,
    MainPlatformComponent,
    MainMostPlayedComponent,
    MainDeveloperComponent,
    MostPlayedCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
<<<<<<< HEAD
    FontAwesomeModule
=======
    FontAwesomeModule,
    HttpClientModule
>>>>>>> b02cfd9a7dc1445583245376ec0d07758d4a3bd2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
