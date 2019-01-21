import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RespCrencaPage } from './resp-crenca.page';

const routes: Routes = [
  {
    path: '',
    component: RespCrencaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RespCrencaPage]
})
export class RespCrencaPageModule {}
