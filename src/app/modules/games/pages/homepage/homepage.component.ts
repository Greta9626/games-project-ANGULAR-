import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  subs: Subscription[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    // SERVICE TEST
    //
    this.subs.push(this.gamesService.getAllGames().subscribe(data => console.log(data)));
    this.subs.push(this.gamesService.getGamesByCategory('shooter').subscribe(data => console.log(data)));
    this.subs.push(this.gamesService.getGamesByPlatform('pc').subscribe(data => console.log(data)));
    this.subs.push(this.gamesService.getMostPlayedGames().subscribe(data => console.log(data)));
  }

  ngOnDestroy() {
    // this.subs.map(sub => sub.unsubscribe());
  }
}
