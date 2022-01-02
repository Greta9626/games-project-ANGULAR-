import { GamesService } from './../../services/games.service';
import { Subscription } from 'rxjs';
import { IGame } from './../../models/game';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {

  allGames!: IGame[];
  partialAllGames!: IGame[];
  subs: Subscription[] = [];

  partialGamesCounter: number = 8;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.subs.push(this.gamesService.getAllGames().subscribe(data => (this.allGames = data, this.partialAllGames = data.slice(0, 8))));
  }
  
  viewMore(): void {
    this.partialAllGames.push(...this.allGames.slice(this.partialGamesCounter, this.partialGamesCounter + 8));
    this.partialGamesCounter += 8;
  }

}
