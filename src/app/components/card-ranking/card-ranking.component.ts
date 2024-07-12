import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-card-ranking',
  templateUrl: './card-ranking.component.html',
  styleUrls: ['./card-ranking.component.css']
})
export class CardRankingComponent implements OnInit {
  labels!: any;
  values: any[] = [{data: []}];
  ranking!: any;

  constructor(
    private rankinEstados: ShareService
  ) {}

  @ViewChild("ranking", { static: true }) elemento!: ElementRef;

  ngOnInit(){
    this.getRanking();
  }

  handleChart(dataLabels: string[], dataValues: any[]) {    
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: dataLabels,
        datasets: dataValues
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        responsive: true,
      }
    });
  }

  getRanking(): void {
    this.rankinEstados.getRankingEstados().subscribe(item => {
      this.ranking = item.ranking;
      this.labels = this.ranking.map((sigla: any) => sigla.estado);
      let temp = this.ranking.map((dado: any) => (dado.total_premios));

      this.values = [{
        data: temp,
        "borderColor": "rgb(75, 192, 192)",
        "backgroundColor": "rgba(75, 192, 192, 0.5)"
      }];
      
      this.handleChart(this.labels, this.values)
    });

  }
}
