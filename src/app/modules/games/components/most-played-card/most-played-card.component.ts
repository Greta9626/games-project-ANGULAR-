import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-most-played-card',
  templateUrl: './most-played-card.component.html',
  styleUrls: ['./most-played-card.component.scss']
})
export class MostPlayedCardComponent implements OnInit {

  @Input() partialMostPlayed!: Game[];

  constructor() { }

  ngOnInit(): void {
  }

}
