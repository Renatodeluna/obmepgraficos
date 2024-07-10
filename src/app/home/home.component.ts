import { Component } from '@angular/core';
import { DadosMiniCards } from './models/dados-mini-cards.models';
import { ShareService } from '../services/share.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // TODO: Dados fake
  dadosIniciaisMiniCards: DadosMiniCards = {
    participantes: 18.369125,
    medalhaOuro: 654,
    medalhaPrata: 1952,
    medalhaBronze: 5852,
  };

  

  constructor(private instituicaoEstado: ShareService) {
  }

  ngOnInit() {
  }


}
