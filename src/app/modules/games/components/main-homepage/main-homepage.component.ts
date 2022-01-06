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
  loadingSpinner: number = 0;
  
  subs: Subscription[] = [];
  bannerGame: number= 466;
  bannerDetail!: Game;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.subs.push(this.gameService.getAllGames().subscribe(data => {this.allGames = data; this.loadingSpinner++}));
    this.subs.push(this.gameService.getMostPlayedGames().subscribe(data => {this.partialMostPlayed = data.slice(0, 3); this.loadingSpinner++}));
    this.subs.push(this.gameService.getSingleGame(this.bannerGame).subscribe((data) => {this.bannerDetail = data; this.loadingSpinner++}))
    // CHIAMATA DEL TODO (riga 23)
    //this.subs.push(this.gameService.getSingleGame(57).subscribe(data => {this.singleGame = data; this.loadingSpinner++}));
  }


  ngOnDestroy(){
    this.subs.map(sub => sub.unsubscribe());
  }
}
