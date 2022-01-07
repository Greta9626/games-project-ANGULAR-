import { Game, IGame } from './../../models/game';
import { Subscription } from 'rxjs';
import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-developer',
  templateUrl: './main-developer.component.html',
  styleUrls: ['./main-developer.component.scss'],
})
export class MainDeveloperComponent implements OnInit {
  allGames: Game[] = [];
  developers: string[] = [];
  filter!: string;
  gamesByDeveloper: Game[] = [];
  loadingSpinner: boolean = false;
  sub!: Subscription;

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.sub = this.gamesService.getAllGames().subscribe((data) => {
      this.allGames = data;
      data.map((elem) => {
        if (!this.developers.includes(elem.developer)) {
          this.developers.push(elem.developer);
        }
      });
    });
  }

  onChangeSelect(): void {
    this.loadingSpinner = true;
    this.gamesByDeveloper = this.allGames.filter(
      (game) => game.developer === this.filter
    );
    setTimeout(() => (this.loadingSpinner = false), 1000);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
