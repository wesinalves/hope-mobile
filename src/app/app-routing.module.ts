import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'resp-repertorio', loadChildren: './resp-repertorio/resp-repertorio.module#RespRepertorioPageModule' },
  { path: 'ideais', loadChildren: './ideais/ideais.module#IdeaisPageModule' },
  { path: 'resp-crenca', loadChildren: './resp-crenca/resp-crenca.module#RespCrencaPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
