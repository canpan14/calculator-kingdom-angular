import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { StatsComponent } from './stats/stats.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'play',
      component: PlayComponent
    },
    {
      path: 'stats',
      component: StatsComponent
    },
    {
      path: 'help',
      component: HelpComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
