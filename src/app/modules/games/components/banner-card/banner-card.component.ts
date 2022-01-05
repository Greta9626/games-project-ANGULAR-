import { Component, OnInit } from '@angular/core';
import { IGame } from '../../models/game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent implements OnInit {
  bannerGame: number= 57;
  bannerDetail!: IGame;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getSingleGame(this.bannerGame).subscribe(
      (data) => this.bannerDetail = data)
    } 
  }   