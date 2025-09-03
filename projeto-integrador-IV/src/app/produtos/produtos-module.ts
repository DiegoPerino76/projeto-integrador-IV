import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estoque } from './estoque/estoque';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { SharedModule } from '../shared/shared-module';
import { ProdutosRoutingModuleTsModule } from './produtos-routing.module.ts-module';



@NgModule({
  declarations: [
    Estoque,
    ListaProdutos
  ],
  imports: [
    CommonModule,
    SharedModule, 
    ProdutosRoutingModuleTsModule
  ],
  exports: [
    Estoque,
    ListaProdutos
  ]

})
export class ProdutosModule { }