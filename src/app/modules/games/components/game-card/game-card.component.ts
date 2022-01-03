import { GamesService } from './../../services/games.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { IGame } from './../../models/game';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() gameData!: IGame;
  @Input() cardHeight = "240px";

  allGames!: IGame[];
  gameDetail!: IGame;
  subs: Subscription[] = [];

  constructor(
    private modalService: NgbModal,
    private gamesService: GamesService
  ) {}

  ngOnInit(): void {}

  open(content: any) {
    this.subs.push(
      this.gamesService.getSingleGame(this.gameData.id).subscribe(
        (data) => (
          (this.gameDetail = data),
          this.modalService.open(content, {
            ariaLabelledBy: 'game-info',
            centered: true,
            windowClass: 'modal-custom',
          })
        )
      )
    );
  }
}
