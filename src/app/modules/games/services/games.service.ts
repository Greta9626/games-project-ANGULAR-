import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Game, IGame } from '../models/game';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  // Gets ALL GAMES from API
  getAllGames(): Observable<Game[]> {
    return this.http.get<IGame[]>(`${environment.apiURL}`)
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  // Gets all games of a CATEGORY (action, shooter, etc.) from API
  getGamesByCategory(category: string): Observable<Game[]> {
    const param = new HttpParams().set('category', category);

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param })
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  // Gets all games of a PLATFORM (pc, browser, other) from API
  getGamesByPlatform(platform: string): Observable<Game[]> {
    const param = new HttpParams().set('platform', platform);

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param })
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  // Returns a list of MOST PLAYED games in DESC. order from API
  getMostPlayedGames(): Observable<Game[]> {
    const param = new HttpParams().set('sort-by', 'popularity');

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param })
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  // Returns a SINGLE GAME with specific info
  getSingleGame(id: number): Observable<Game> {
    const param = new HttpParams().set('id', id);

    return this.http.get<IGame>('https://www.freetogame.com/api/game', { params: param })
      .pipe(map( game => Game.Build(game)));
  }
}
