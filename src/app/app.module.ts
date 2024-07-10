import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CardMinComponent } from './components/card-min/card-min.component';
import { CardRankingComponent } from './components/card-ranking/card-ranking.component';
import { CardInstituicaoEstadoEdicaoComponent } from './components/card-instituicao-estado-edicao/card-instituicao-estado-edicao.component';
import { CardInstituicaoMunicipioEdicaoComponent } from './components/card-instituicao-municipio-edicao/card-instituicao-municipio-edicao.component';

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardMinComponent,
    CardRankingComponent,
    CardInstituicaoEstadoEdicaoComponent,
    CardInstituicaoMunicipioEdicaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
