import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-card-ranking',
  templateUrl: './card-ranking.component.html',
  styleUrls: ['./card-ranking.component.css']
})
export class CardRankingComponent implements OnInit {

  constructor(
    private rankinEstados: ShareService
  ) {}

  @ViewChild("ranking", { static: true }) elemento!: ElementRef;

  ngOnInit(){
    this.getRanking();

    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"],
        datasets: [
          {
            data: [65, 64, 67, 98, 23, 30, 65, 64, 67, 98, 23, 30, 75, 23]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });
  }

  temp = {};

  getRanking(): void {
    // this.rankinEstados.getRankingEstados().subscribe(item => {
    //   this.temp = item.ranking;
      
    //   // {
    //   //   total: item.ranking.total_premios
    //   // }
    //   let res = [this.temp].map(dado => dado.estado)
    //   console.log("temp", )
    // });
  }
}
