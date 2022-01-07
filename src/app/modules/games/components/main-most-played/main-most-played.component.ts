import { Subscription } from 'rxjs';
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
  loadingSpinner: boolean = true;
  sub!: Subscription;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.sub = this.gameService.getMostPlayedGames().subscribe(data => {this.mostPlayedGames = data; this.loadingSpinner = false});
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
