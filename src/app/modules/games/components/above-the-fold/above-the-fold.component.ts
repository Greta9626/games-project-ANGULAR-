import { Game } from './../../models/game';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent implements OnInit {

  @Input() aboveTheFoldInput!: Game;

  constructor() { }

  ngOnInit(): void {
  }

}
