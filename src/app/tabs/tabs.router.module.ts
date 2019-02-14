import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'repertorio',
        children: [
          {
            path: '',
            loadChildren: '../repertorio/repertorio.module#RepertorioPageModule'
          }
        ]
      },
      {
        path: 'agenda',
        children: [
          {
            path: '',
            loadChildren: '../agenda/agenda.module#AgendaPageModule'
          }
        ]
      },
      {
        path: 'ideais',
        children: [
          {
            path: '',
            loadChildren: '../ideais/ideais.module#IdeaisPageModule'
          }
        ]
      },

      {
        path: 'sort',
        children: [
          {
            path: '',
            loadChildren: '../sort/sort.module#SortPageModule'
          }
        ]
      },

      {
        path: 'crenca',
        children: [
          {
            path: '',
            loadChildren: '../crenca/crenca.module#CrencaPageModule'
          }
        ]
      },

      {
        path: 'resp-crenca',
        children: [
          {
            path: '',
            loadChildren: '../resp-crenca/resp-crenca.module#RespCrencaPageModule'
          }
        ]
      },

      {
        path: 'resp-repertorio/:id',
        children: [
          {
            path: '',
            loadChildren: '../resp-repertorio/resp-repertorio.module#RespRepertorioPageModule'
          }
        ]
      },

      {
        path: 'mais',
        children: [
          {
            path: '',
            loadChildren: '../mais/mais.module#MaisPageModule'
          }
        ]
      },

      
      {
        path: 'contato',
        children: [
          {
            path: '',
            loadChildren: '../contato/contato.module#ContatoPageModule'
          }
        ]
      },

      {
        path: 'roleta',
        children: [
          {
            path: '',
            loadChildren: '../roleta/roleta.module#RoletaPageModule'
          }
        ]
      },
      {
        path: 'simbolos',
        children: [
          {
            path: '',
            loadChildren: '../simbolos/simbolos.module#SimbolosPageModule'
          }
        ]
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}