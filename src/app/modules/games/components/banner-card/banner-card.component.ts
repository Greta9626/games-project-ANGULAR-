import { Game } from './../../models/game';
import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent implements OnInit {

  @Input() bannerInput!: Game;


  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {} 
  }   
