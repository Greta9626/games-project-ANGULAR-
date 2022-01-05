import { Game, IGame } from './../../models/game';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';

interface GameListStyle{
  showViewMore: boolean;
  partialGamesCounter: number;
  type: string; //'col-3 mb-4' | 'col-4 mb-3';
  cardHeight: string;
  mostPlayed: boolean;
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  _listStyle: GameListStyle = {
    showViewMore: false,
    partialGamesCounter: 8,
    mostPlayed: false,
    type: 'col-3 mb-4',
    cardHeight: '240px'
  }

  @Input() set listStyle(value: Partial<GameListStyle>){
    this._listStyle = { ...this._listStyle, ...value };
  }
  @Input() gameList!: Game[];

  partialGameList!: Game[];

  constructor() { }

  /* TODO: provare con Async */
  ngOnInit(): void {
/*     interval(1000).subscribe( */
      /* () => { */
        this.partialGameList = this.gameList.slice(0, this._listStyle.partialGamesCounter);
        if (this.gameList.length > 8 && !this._listStyle.mostPlayed) {
          this._listStyle.showViewMore = true; // Il view more deve essere mostrato quando ho più di 8 elementi totali ma SOLO SE NON SIAMO NEI PRIMI 3 MOST PLAYED
        }
      /* } */
    /* ) */
  }

  viewMore(): void {
    this.partialGameList.push(...this.gameList.slice(this._listStyle.partialGamesCounter, this._listStyle.partialGamesCounter + 8));
    this._listStyle.partialGamesCounter += 8;
  }

}
