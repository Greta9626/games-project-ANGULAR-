import { IGame } from './../../models/game';
import { Subscription } from 'rxjs';
import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-developer',
  templateUrl: './main-developer.component.html',
  styleUrls: ['./main-developer.component.scss'],
})
export class MainDeveloperComponent implements OnInit {
  allGames: IGame[] = [];
  developers: string[] = [];
  filter!: string;
  gamesByDeveloper!: IGame[];
  subs: Subscription[] = [];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.subs.push(
      this.gamesService.getAllGames().subscribe((data) => {
        this.allGames = data;
        data.map((elem) => {
          if (!this.developers.includes(elem.developer)) {
            this.developers.push(elem.developer);
          }
        });
      })
    );
  }

  onChangeSelect(): void {
    this.gamesByDeveloper = this.allGames.filter(
      (game) => game.developer === this.filter
    )
  }
}
