import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { StatsComponent } from './stats/stats.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
    {
      path: 'home',
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
    },
    {
      path: '',
      component: SignInComponent
    },
    {
      path: 'sign-up',
      component: SignUpComponent
    },
    {
      path: 'change-password',
      component: ChangePasswordComponent
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
