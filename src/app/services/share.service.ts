import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompararDesempenho } from '../home/models/comparar-desempenho.models';
import { environment } from 'src/environments/environment';
import { BuscaInstituicaoEstado } from '../home/models/busca-instituicao-estado.models';
import { BuscaInstituicaoMunicipio } from '../home/models/busca-instituicao-municipio.models';



@Injectable({
  providedIn: 'root'
})
export class ShareService {
  //headers = new HttpHeaders({ "Content-Type": "application/json" });
  private baseUrl = environment.apiRoot;
  listaMunicipios: string = '/listar-municipios';
  instituicaoEstado: string = '/buscarinstituicaoestado';
  instituicaoMunicipio: string = '/buscarinstituicaomunicipio';
  listaPremiacoes: string = '/listar-total-premiacoes';
  rankingEstados: string = '/ranking-geral-estados';
  
  
  constructor(private httpClient: HttpClient) {
  }
  
  params: any = new HttpParams();

  // GET: LISTA PREMIACOES
  getlistaPremiacoes(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl + this.listaPremiacoes);
  }

  // GET: RANKING ESTADOS
  getRankingEstados(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl + this.rankingEstados);
  }

  // GET: BUSCAR INSTITUIÇÃO ESTADO
  getBuscaInstituicaoEstado(estado?: string, nivel?: number, edicao?: number):  Observable<BuscaInstituicaoEstado> {
    let params = new HttpParams();

    if (estado !== undefined) {
        params = params.set('estado', estado);
    }
    if (nivel !== undefined) {
        params = params.set('nivel', nivel.toString());
    }
    if (edicao !== undefined) {
        params = params.set('edicao', edicao.toString());
    }

    return this.httpClient.get<BuscaInstituicaoEstado>(this.baseUrl + this.instituicaoEstado, { params });
  }

  // GET: LISTA MUNICIPIOS
  getlistaMunicipios(estado?: string): Observable<any[]> {
    let params = new HttpParams();

    if (estado !== undefined) {
        params = params.set('estado', estado);
    }

    return this.httpClient.get<any[]>(this.baseUrl + this.listaMunicipios, { params });
  }

  // GET: BUSCAR INSTITUIÇÃO MUNICIPIO
  getBuscaInstituicaoMunicipio(municipio?: string, nivel?: number, edicao?: number):  Observable<BuscaInstituicaoMunicipio> {
    let params = new HttpParams();

    if (municipio !== undefined) {
        params = params.set('municipio', municipio);
    }
    if (nivel !== undefined) {
        params = params.set('nivel', nivel.toString());
    }
    if (edicao !== undefined) {
        params = params.set('edicao', edicao.toString());
    }

    return this.httpClient.get<BuscaInstituicaoMunicipio>(this.baseUrl + this.instituicaoMunicipio, { params });
  }
}
