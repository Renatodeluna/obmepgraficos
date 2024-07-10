import { Component } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-card-instituicao-municipio-edicao',
  templateUrl: './card-instituicao-municipio-edicao.component.html',
  styleUrls: ['./card-instituicao-municipio-edicao.component.css']
})
export class CardInstituicaoMunicipioEdicaoComponent {
  estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
  ];

  niveis = [
    { valor: 1, nivel: 1 },
    { valor: 2, nivel: 2 },
    { valor: 3, nivel: 3 },
  ]

  edicoes = [
    { valor: 2005, ano: '2005' },
    { valor: 2006, ano: '2006' },
    { valor: 2007, ano: '2007' },
    { valor: 2008, ano: '2008' },
    { valor: 2009, ano: '2009' },
    { valor: 2010, ano: '2010' },
    { valor: 2011, ano: '2011' },
    { valor: 2012, ano: '2012' },
    { valor: 2013, ano: '2013' },
    { valor: 2014, ano: '2014' },
    { valor: 2015, ano: '2015' },
    { valor: 2016, ano: '2016' },
    { valor: 2017, ano: '2017' },
    { valor: 2018, ano: '2018' },
    { valor: 2019, ano: '2019' },
    { valor: 2020, ano: '2020' },
    { valor: 2021, ano: '2021' },
    { valor: 2022, ano: '2022' },
    { valor: 2023, ano: '2023' },
  ]

  municipios!: any;

  estadoSelecionado: string = 'PB';
  municipioSelecionado: string = 'JOAO PESSOA';
  nivelSelecionado: number = 2;
  edicaoSelecionado: number = 2023;

  resultInstituicaoEstado = { instituicao: "", total_premiacoes: 0};
  resultInstituicaoMunicipio!: any;

  constructor(
    private instituicaoEstado: ShareService,
    private instituicaoMunicipio: ShareService,
    private listaMunicipio: ShareService,
  ) {}

  ngOnInit() {
    this.getMunicipios(this.estadoSelecionado);
    this.getInstituicaoMunicipio(this.municipioSelecionado, this.nivelSelecionado, this.edicaoSelecionado);
  }

  selecionaEstado(event: any) {
    this.estadoSelecionado = event.target.value;
    this.getMunicipios(this.estadoSelecionado);
  }

  selecionaMunicipio(event: any) {
    this.municipioSelecionado = event.target.value;
    this.getInstituicaoMunicipio(this.municipioSelecionado);
  }

  selecionaNivel(event: any) {
    this.nivelSelecionado = event.target.value;
    
    this.getInstituicaoMunicipio(this.municipioSelecionado, this.nivelSelecionado);
  }

  selecionaEdicao(event: any) {
    this.edicaoSelecionado = event.target.value;
    
    this.getInstituicaoMunicipio(this.municipioSelecionado, this.nivelSelecionado, this.edicaoSelecionado);
  }

  getInstituicaoEstado(buscaEstado?: string, buscaNivel?: number, buscaEdicao?: number): void {
    this.instituicaoEstado.getBuscaInstituicaoEstado(buscaEstado, buscaNivel, buscaEdicao).subscribe(item => {
      this.resultInstituicaoEstado.instituicao = item.instituicao;
      this.resultInstituicaoEstado.total_premiacoes = item.total_premiacoes;
    });
  }

  getInstituicaoMunicipio(buscaMunicipio?: string, buscaNivel?: number, buscaEdicao?: number): void {
    try {
      this.instituicaoMunicipio.getBuscaInstituicaoMunicipio(buscaMunicipio, buscaNivel, buscaEdicao).subscribe(item => {
        this.resultInstituicaoMunicipio = {
          instituicao: item.instituicao,
          total_premiacoes: item.total_premiacoes,
        }
      });      
    } catch (error: any) {
      console.log(error.message);
    }
  }

  getMunicipios(buscaMunicipio?: string): void {
    this.listaMunicipio.getlistaMunicipios(buscaMunicipio).subscribe(item => {
      let res: any = item;
      this.municipios = res.municipio;
    });

  }
  
}


