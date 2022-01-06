import { GamesService } from './../../services/games.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() gameShortData!: Game;
  @Input() content!: any;

  gameLongData!: Game;
  loadingSpinner: boolean = true;
  subs: Subscription[] = [];

  constructor(
    private gamesService: GamesService,
    public modal: NgbActiveModal,
  ) {}

  ngOnInit(): void {
    /* this.openModal() */
    this.subs.push(
      this.gamesService.getSingleGame(this.gameShortData.id).subscribe(
        (data) => (
          this.gameLongData = data,
          this.loadingSpinner = false
        )
      )
    );
  }

  openModal() {
    
  }
}
