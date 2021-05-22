import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsProviderPage } from './tabs-provider.page';

const routes: Routes = [
  {
    path: '',
    component: TabsProviderPage,

    children: [
      {
        path: 'home-provider',
        loadChildren: () =>
          import(
            '../../service-provider/home-provider/home-provider.module'
          ).then((m) => m.HomeProviderPageModule),
      },
      {
        path: 'appointment-provider',
        loadChildren: () =>
          import(
            '../../service-provider/appointment-provider/appointment-provider.module'
          ).then((m) => m.AppointmentProviderPageModule),
      },
      {
        path: 'search-provider',
        loadChildren: () => import('../../service-provider/search-provider/search-provider.module').then( m => m.SearchProviderPageModule)
      },
      {
        path: 'message-provider',
        loadChildren: () =>
          import(
            '../../service-provider/message-provider/message-provider.module'
          ).then((m) => m.MessageProviderPageModule),
      },
      {
        path: 'profile-provider',
        loadChildren: () =>
          import(
            '../../service-provider/profile-provider/profile-provider.module'
          ).then((m) => m.ProfileProviderPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsProviderPageRoutingModule {}
