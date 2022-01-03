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

  // Gets all games from API
  getAllGames(): Observable<Game[]> {
    return this.http.get<IGame[]>(`${environment.apiURL}`)
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  // Gets all games of a category (action, shooter, etc.) from API
  getGamesByCategory(category: string): Observable<Game[]> {
    const param = new HttpParams().set('category', category);

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param })
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  // Gets all games of a platform (pc, browser, other) from API
  getGamesByPlatform(platform: string): Observable<Game[]> {
    const param = new HttpParams().set('platform', platform);

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param })
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  // TODO:
  //  it's time consuming getting all games, it should block the call after
  //  getting 10 games or whatever number we need for the project

  // Returns a list of most played games in DESC. order from API
  getMostPlayedGames(): Observable<Game[]> {
    const param = new HttpParams().set('sort-by', 'popularity');

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param })
      .pipe(map( response => response.map(game => Game.Build(game))));
  }

  getSingleGame(id: number): Observable<Game> {
    const param = new HttpParams().set('id', id);

    return this.http.get<IGame>('https://www.freetogame.com/api/game', { params: param })
      .pipe(map( game => Game.Build(game)));
  }
}
