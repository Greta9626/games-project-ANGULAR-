import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-main-most-played',
  templateUrl: './main-most-played.component.html',
  styleUrls: ['./main-most-played.component.scss']
})
export class MainMostPlayedComponent implements OnInit {

  mostPlayedGames!: Game[];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.getMostPlayedGames().subscribe(data => this.mostPlayedGames = data);
  }

}
