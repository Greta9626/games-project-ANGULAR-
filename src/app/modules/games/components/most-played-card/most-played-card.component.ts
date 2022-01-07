import { ModalComponent } from './../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-most-played-card',
  templateUrl: './most-played-card.component.html',
  styleUrls: ['./most-played-card.component.scss']
})
export class MostPlayedCardComponent implements OnInit {

  @Input() partialMostPlayed!: Game[];

  openModal: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(game: Game): void {
    this.openModal = true;
    const modalCall = this.modalService.open(ModalComponent, {
      ariaLabelledBy: 'game-info',
      centered: true,
      windowClass: 'modal-custom',
    });
    
    modalCall.componentInstance.gameShortData = game;
  }

}
