import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { Game } from './../../models/game';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.scss']
})
export class BannerCardComponent implements OnInit {

  @Input() bannerInput!: Game;
  openModal: boolean = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {}

  open(): void {
    this.openModal = true;
    const modalCall = this.modalService.open(ModalComponent, {
      ariaLabelledBy: 'game-info',
      centered: true,
      windowClass: 'modal-custom',
    });

    modalCall.componentInstance.gameShortData = this.bannerInput;
  }
  }   
