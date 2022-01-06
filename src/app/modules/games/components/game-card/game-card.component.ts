import { ModalComponent } from './../modal/modal.component';
import { GamesService } from './../../services/games.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Game } from './../../models/game';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() gameData!: Game;
  @Input() cardHeight = '240px';

  allGames!: Game[];
  subs: Subscription[] = [];
  openModal: boolean = false;

  constructor(
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {}

  open(): void {
    /* console.log(content) */
    this.openModal = true;
    const modalCall = this.modalService.open(ModalComponent, {
      ariaLabelledBy: 'game-info',
      centered: true,
      windowClass: 'modal-custom',
    });

    modalCall.componentInstance.gameShortData = this.gameData;
  }
}
