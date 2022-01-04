import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.scss']
})
export class MainHomepageComponent implements OnInit {

  allGames!: Game[];
  partialMostPlayed!: Game[];

  subs: Subscription[] = [];

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.subs.push(this.gameService.getAllGames().subscribe(data => this.allGames = data));
    this.subs.push(this.gameService.getMostPlayedGames().subscribe(data => this.partialMostPlayed = data.slice(0, 3)));
  }

  ngOnDestroy(){
    this.subs.map(sub => sub.unsubscribe());
  }
}
