import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.scss']
})
export class MainHomepageComponent implements OnInit {

  allGames!: Game[];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.gameService.getAllGames().subscribe(data => this.allGames = data);
  }

}
