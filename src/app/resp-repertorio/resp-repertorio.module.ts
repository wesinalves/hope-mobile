import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RespRepertorioPage } from './resp-repertorio.page';

const routes: Routes = [
  {
    path: '',
    component: RespRepertorioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RespRepertorioPage]
})
export class RespRepertorioPageModule {}
