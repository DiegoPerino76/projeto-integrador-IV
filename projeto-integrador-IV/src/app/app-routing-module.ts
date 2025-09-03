import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'produtos', component: ListaProdutos }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[RouterModule]
})
export class ProdutosRoutingModuleTsModule { }
