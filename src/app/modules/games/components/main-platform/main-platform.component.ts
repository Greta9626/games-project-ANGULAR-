import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

interface GameListStyle{
  showViewMore: boolean;
  partialGamesCounter: number;
  type: string; //'col-3 mb-4' | 'col-4 mb-3';
  cardHeight: string
}

@Component({
  selector: 'app-main-platform',
  templateUrl: './main-platform.component.html',
  styleUrls: ['./main-platform.component.scss']
})
export class MainPlatformComponent implements OnInit {
  
  _listStyle: GameListStyle = {
    showViewMore: true,
    partialGamesCounter: 8,
    type: 'col-3 mb-4',
    cardHeight: '240px'
  }
  
    partialGameList! : Game[];
    gameList!: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
        this.gamesService.getGamesByPlatform('all').subscribe(
          (data: Game[]) => this.gameList = data)
        // this.partialGameList = this.gameList.slice(0, this._listStyle.partialGamesCounter)
  }


  getByPlatform(platform: string): void{
    this.gamesService.getGamesByPlatform(platform).subscribe(
    (data) => this.gameList = data
    )
  };

  //  viewMore(): void {
  //    this.partialGameList.push(...this.gameList.slice(this._listStyle.partialGamesCounter, this._listStyle.partialGamesCounter + 8));
  //    this._listStyle.partialGamesCounter += 8;
  //  }
}
