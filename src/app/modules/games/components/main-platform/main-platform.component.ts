import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-platform',
  templateUrl: './main-platform.component.html',
  styleUrls: ['./main-platform.component.scss']
})
export class MainPlatformComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
    /* service.getGamesByPlatform('all').subscribe((data) => {


      this.games = data;
    }) */
  }

/*   onChangePlatform(platform: string): void {
    service.getGamesByPlatform(platform).subscribe((data) => {

      this.games = data;
    })
  } */

}
