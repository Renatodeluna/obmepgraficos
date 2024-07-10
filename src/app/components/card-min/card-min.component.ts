import { Component, OnInit, Input } from '@angular/core';
import { DadosMiniCards } from 'src/app/home/models/dados-mini-cards.models';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-card-min',
  templateUrl: './card-min.component.html',
  styleUrls: ['./card-min.component.css']
})
export class CardMinComponent implements OnInit {
  premiacoes!: any;

  constructor(
    private listaPremiacoes: ShareService,
  ){ }

  ngOnInit() {
    this.getPremiacoes();
  }

  getPremiacoes(): void {
    this.listaPremiacoes.getlistaPremiacoes().subscribe(item => {
      let temp = item.medalhas;

      this.premiacoes = {
        bronze: temp.bronze,
        ouro: temp.ouro,
        prata: temp.prata,
        total: item.total_geral,
      }
    });
  }

}
