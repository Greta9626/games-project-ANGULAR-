import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MainPlatformComponent } from './modules/games/components/main-platform/main-platform.component';
<<<<<<< HEAD
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======
import { MainMostPlayedComponent } from './modules/games/components/main-most-played/main-most-played.component';
import { MainDeveloperComponent } from './modules/games/components/main-developer/main-developer.component';
import { MostPlayedCardComponent } from './modules/games/components/most-played-card/most-played-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainContainerComponent } from './modules/games/components/MAIN-CONTAINER/main-container.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> feature-Lucia-banner

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainPlatformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule
  ],
  providers: [
    NgbActiveModal,
=======
    HttpClientModule
>>>>>>> feature-Lucia-banner
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
