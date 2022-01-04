import { GamesService } from './../../services/games.service';
import { Subscription } from 'rxjs';
import { IGame } from './../../models/game';
import { Component, Input, OnInit } from '@angular/core';

interface GameListStyle{
  showViewMore: boolean;
  partialGamesCounter: number;
  type: string; //'col-3 mb-4' | 'col-4 mb-3';
}

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})

export class GamesListComponent implements OnInit {

  @Input() set listStyle(value: Partial<GameListStyle>){
    this._listStyle = { ...this._listStyle, ...value };
  }

  _listStyle: GameListStyle = {
    showViewMore: true,
    partialGamesCounter: 8,
    type: 'col-3 mb-4'
  }

  allGames!: IGame[];
  partialAllGames!: IGame[];
  subs: Subscription[] = [];


  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.subs.push(this.gamesService.getAllGames().subscribe(data => (this.allGames = data, this.partialAllGames = data.slice(0, this._listStyle.partialGamesCounter))));
  }

  viewMore(): void {
    this.partialAllGames.push(...this.allGames.slice(this._listStyle.partialGamesCounter, this._listStyle.partialGamesCounter + 8));
    this._listStyle.partialGamesCounter += 8;
  }

}
