import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { IGame } from '../models/game';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private readonly http: HttpClient
  ) { }

  // Is Builder pattern needed?!

  getAllGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${environment.apiURL}`);
  }

  getGamesByCategory(category: string): Observable<IGame[]> {
    const param = new HttpParams().set('category', category);

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param });
  }

  getGamesByPlatform(platform: string): Observable<IGame[]> {
    const param = new HttpParams().set('platform', platform);

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param });
  }

  // TODO:
  //  it's time consuming getting all games, it should block the call after
  //  getting 10 games or whatever number we need for the project
  getMostPlayedGames(): Observable<IGame[]> {
    const param = new HttpParams().set('sort-by', 'popularity');

    return this.http.get<IGame[]>(`${environment.apiURL}`, { params: param });
  }
}
