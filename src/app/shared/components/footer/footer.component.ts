import { Component, OnInit } from '@angular/core';
import { faDiscord, faYoutube, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  discordLogo = faDiscord;
  ytLogo = faYoutube;
  igLogo = faInstagram;
  fbLogo = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }

}
