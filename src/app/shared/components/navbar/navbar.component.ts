import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit {
  searchLogo = faSearch;
  activeButton: string = 'homepage';

  constructor() {}

  ngOnInit(): void {
    let currentUrl = window.location.href; /* prendo l'url della pagina e lo splitto*/
    let partialUrl = currentUrl.split('/games/');
    this.activeButton = partialUrl[1];
  }

  clickNavOption(page: string): void {
    this.activeButton = page;
  }
}
