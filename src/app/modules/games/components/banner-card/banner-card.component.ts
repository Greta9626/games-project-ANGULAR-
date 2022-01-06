import { Game } from './../../models/game';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent implements OnInit {

  @Input() bannerInput!: Game;


  constructor() { }

  ngOnInit(): void {} 
  }   
