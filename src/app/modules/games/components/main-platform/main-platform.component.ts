import { GamesService } from './../../services/games.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-platform',
  templateUrl: './main-platform.component.html',
  styleUrls: ['./main-platform.component.scss']
})
export class MainPlatformComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private gamesService: GamesService
    ) {}

  ngOnInit(): void {
    this.gamesService.getGamesByPlatform('all').subscribe(
      (data) => console.table(data)
    )
  }


  getByPlatform(platform: string): void{
    this.gamesService.getGamesByPlatform(platform).subscribe(
    (data) => console.table(data)
    )
  };


  

}
