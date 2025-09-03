import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Soma } from './contador/soma/soma';
import { ContadorModule } from './contador/contador-module';
import { EstruturaModule } from './estrutura/estrutura-module';
import { ProdutosModule } from './produtos/produtos-module';
import { Diretiva } from './estrutura/diretiva/diretiva';
import { Produtos } from './produtos/lista-produtos/produtos/produtos';
import { ListaProdutos } from './produtos/lista-produtos/lista-produtos';
import { Shared } from './shared/botao/shared/shared';
import { Botao } from './shared/botao/botao';

@NgModule({
  declarations: [
    App,
    Soma,
    Diretiva,
    Produtos,
    ListaProdutos,
    Shared,
    Botao,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContadorModule,
    EstruturaModule,
    ProdutosModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }