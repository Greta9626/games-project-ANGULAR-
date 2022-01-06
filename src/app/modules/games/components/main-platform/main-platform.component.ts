import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-main-platform',
  templateUrl: './main-platform.component.html',
  styleUrls: ['./main-platform.component.scss']
})
export class MainPlatformComponent implements OnInit {

  activeButton = "all";
  gamePlatformList!: Game[];

  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.gamesService.getGamesByPlatform('all').subscribe(
      (data => this.gamePlatformList = data))
  }


  getByPlatform(platform: string): void{
    this.activeButton = platform;
    this.gamesService.getGamesByPlatform(platform).subscribe(
      (data) => this.gamePlatformList = data
    )
  };

}
