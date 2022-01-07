import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-main-platform',
  templateUrl: './main-platform.component.html',
  styleUrls: ['./main-platform.component.scss']
})
export class MainPlatformComponent implements OnInit {

  sub!: Subscription;
  gamesByPlatform: Game[] = []
  loadingSpinner: boolean = true;
  activeButton: string = 'all'

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  this.filterButton('all');
  }

  filterButton(platform: string): void {
    this.activeButton = platform;
    this.loadingSpinner = true;
    this.gamesByPlatform = [],

    this.sub = (this.gameService.getGamesByPlatform(platform).subscribe(data => {this.gamesByPlatform = data; this.loadingSpinner = false}));
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
